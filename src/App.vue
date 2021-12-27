<template>
 <div>
 
  <full-page ref="fullpage" :options="options" id="fullpage">
    <Header/>
    <div class="section" id="section0">
      <Slider :slider="slider" />
    </div>
    <div class="section" v-if="products[0]" id="sect">
      <Product :product = "products[0]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section" v-if="products[1]" id="sect">
      <Product :product = "products[1]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section" v-if="products[2]" id="sect">
      <Product :product = "products[2]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section" v-if="products[3]" id="sect">
      <Product :product = "products[3]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section" v-if="products[4]" id="sect">
      <Product :product = "products[4]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section" v-if="products[5]" id="sect">
      <Product :product = "products[5]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section" v-if="products[6]" id="sect">
      <Product :product = "products[6]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section" v-if="products[7]" id="sect">
      <Product :product = "products[7]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section" v-if="products[8]" id="sect">
      <Product :product = "products[8]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section" v-if="products[9]" id="sect">
      <Product :product = "products[9]"/>
      <!-- <div @click="addSection">add section</div> -->
    </div>
    <div class="section"><Aboutus :contacts="contacts"/></div>
    <div class="section"><Footer :partners="partners"  :contacts="contacts"/></div>
  </full-page>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Slider from "./components/Slider.vue"
import Aboutus from "./components/Aboutus.vue"
import Footer from "./components/Footer.vue"
import Product from "./components/Product.vue"
import axios from "axios";

export default {
  name: "App",
  components: { Header, Slider, Aboutus, Footer, Product},
  data() {
    return {
      imgUrl: "slider.png",
      data: null,
      products: null,  
      slider: null,
      partners: null,
      contacts: null,
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        anchors: ["page1", "product1",  "product2",  "product3", "product4", "product5",  "product6",  "product7",  "product8", "aboutUs", "Map"],
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        dragAndMove: true,
        responsiveWidth: 891,
        normalScrollElements: '.scrollable-content',
        afterResponsive: function(isResponsive){
        }
      },
      // products: { 
      //   product1: { 
      //     background_img: "./assets/background1.png",
      //     title: "ფასადის ლაქი",
      //     product_img: "./assets/product1.png",
      //     short_desc: "ხის ფასადის ლაქის ( სინთეტიკური ცვილით) თანამედროვე ფორმულა, რომლიც დამზადებულია ხის ფისოვან ნაერთზე, არის ძალიან გამძლე ამინდის რთულ პირობებში",
      //     long_desc: "ხის ფასადის ლაქის ( სინთეტიკური ცვილით) თანამედროვე ფორმულა, რომლიც დამზადებულია ხის ფისოვან ნაერთზე, არის ძალიან გამძლე ამინდის რთულ პირობებში ხის ფასადის ლაქის ( სინთეტიკური ცვილით) თანამედროვე ფორმულა ფასადის ლაქის ( სინთეტიკური ცვილით) თანამედროვე ფორმულ",
      //     features: [
      //       {
      //          id: "1",
      //          feature_name: "დამცავი",
      //          feature_desc: "ფისოვანი სისტემა",
      //          feature_img: "./assets/feature1.png"
      //       },
      //       {
      //          id: "2",
      //          feature_name: "დამცავი",
      //          feature_desc: "ფისოვანი სისტემა",
      //          feature_img: "./assets/feature1.png"
      //       },
      //       {
      //          id: "3",
      //          feature_name: "დამცავი",
      //          feature_desc: "ფისოვანი სისტემა",
      //          feature_img: "./assets/feature1.png"
      //       },
      //       {
      //          id: "4",
      //          feature_name: "დამცავი",
      //          feature_desc: "ფისოვანი სისტემა",
      //          feature_img: "./assets/feature1.png"
      //       }             
      //     ],
      //     available_colors: ["red", "blue", "green"],
      //     available_capacities: [
      //       {
      //         id: 1,
      //         capacity: "0.7",
      //         fill: "9"
      //       },
      //       {
      //         id: 2,
      //         capacity: "2.5",
      //         fill: "30"
      //       },
      //       {
      //         id: 3,
      //         capacity: "7.5",
      //         fill: "60"
      //       }
      //     ]
      //   }
      // }
    };
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get("http://altax-admin.maestroerror.ge/data/data.json")
          .then((res) => this.data = {... res.data["მენიუ"]})
          .then(() => {
            this.products = this.data["Products"];
            this.slider =  this.data["Slider"];
            this.partners = this.data["Partners"];
            this.contacts = this.data["Contacts"];
            console.log(this.slider, "slideria");
          })
    },
        // afterLoad: function(origin, destination, direction){
        //     console.log("After load....");
        //     console.log(destination);
        // },
        // addSection: function(e) {
        //     var newSectionNumber = document.querySelectorAll('.fp-section').length + 1

        //     // creating the section div
        //     var section = document.createElement('div')
        //     section.className = 'section'
        //     section.innerHTML = `<Product href="#page${newSectionNumber}" :product = "products[0]"></Product>`

        //     // adding section
        //     document.querySelector('#fullpage').appendChild(section)

        //     // creating the section menu element
        //     var sectionMenuItem = document.createElement('li')
        //     sectionMenuItem.setAttribute('data-menuanchor', 'page' + newSectionNumber)
        //     sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`

        //     // adding anchor for the section
        //     this.options.anchors.push(`page${newSectionNumber}`)

        //     // we have to call `update` manually as DOM changes won't fire updates
        //     // requires the use of the attribute ref="fullpage" on the
        //     // component element, in this case, <full-page>
        //     // ideally, use an ID element for that element too
        //     this.$refs.fullpage.build()
        // },
  }
};
</script>

<style>
#app {
  font-family: MarkGEO-SemiBold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
html, body {
  font-family: MarkGEO-SemiBold;
  overflow-y: hidden;
}
.fullpage-wrapper {
  overflow-x: hidden;
}
h1 {
  margin: 0;
}
#fp-nav ul li a span, .fp-slidesNav ul li a span {
  border-radius: 0 !important;
  height: 24px !important;
  width: 1px !important;
  background: white !important;
}
#fp-nav ul li a.active span, #fp-nav ul li:hover a.active span, .fp-slidesNav ul li a.active span, .fp-slidesNav ul li:hover a.active span {
  background: white !important;
  width: 9px !important;
  background: #e3000f !important;
}
#fp-nav ul li:hover a span, .fp-slidesNav ul li:hover a span {
  width: 9px !important;
  margin: -6px 0 0 -6px !important;
}
</style>
