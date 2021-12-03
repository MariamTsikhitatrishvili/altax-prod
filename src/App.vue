<template>
 <div>
 
  <full-page ref="fullpage" :options="options" id="fullpage">
    <Header/>
    <div class="section" id="section0">
      <Slider/>
    </div>
    <div class="section" id="section1"><Product :product = "products.product1"/></div>
    <div class="section"><Aboutus/></div>
    <div class="section"><Footer/></div>
  </full-page>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Slider from "./components/Slider.vue"
import Aboutus from "./components/Aboutus.vue"
import Footer from "./components/Footer.vue"
import Product from "./components/Product.vue"

export default {
  name: "App",
  components: { Header, Slider, Aboutus, Footer, Product},
  data() {
    return {
      imgUrl: "slider.png",
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        anchors: ["page1", "page2", "aboutUs", "Map"],
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        dragAndMove: true,
        responsiveWidth: 800,
        afterResponsive: function(isResponsive){
          
        }
      },
      products: { 
        product1: { 
          background_img: "./assets/background1.png",
          title: "ფასადის ლაქი",
          product_img: "./assets/product1.png",
          short_desc: "ხის ფასადის ლაქის ( სინთეტიკური ცვილით) თანამედროვე ფორმულა, რომლიც დამზადებულია ხის ფისოვან ნაერთზე, არის ძალიან გამძლე ამინდის რთულ პირობებში",
          long_desc: "ხის ფასადის ლაქის ( სინთეტიკური ცვილით) თანამედროვე ფორმულა, რომლიც დამზადებულია ხის ფისოვან ნაერთზე, არის ძალიან გამძლე ამინდის რთულ პირობებში ხის ფასადის ლაქის ( სინთეტიკური ცვილით) თანამედროვე ფორმულა ფასადის ლაქის ( სინთეტიკური ცვილით) თანამედროვე ფორმულ",
          features: [
            {
               id: "1",
               feature_name: "დამცავი",
               feature_desc: "ფისოვანი სისტემა",
               feature_img: "./assets/feature1.png"
            },
            {
               id: "2",
               feature_name: "დამცავი",
               feature_desc: "ფისოვანი სისტემა",
               feature_img: "./assets/feature1.png"
            },
            {
               id: "3",
               feature_name: "დამცავი",
               feature_desc: "ფისოვანი სისტემა",
               feature_img: "./assets/feature1.png"
            },
            {
               id: "4",
               feature_name: "დამცავი",
               feature_desc: "ფისოვანი სისტემა",
               feature_img: "./assets/feature1.png"
            }             
          ],
          available_colors: ["red", "blue", "green"],
          available_capacities: [
            {
              id: 1,
              capacity: "0.7",
              fill: "9"
            },
            {
              id: 2,
              capacity: "2.5",
              fill: "30"
            },
            {
              id: 3,
              capacity: "7.5",
              fill: "60"
            }
          ]
        }
      }
    };
  },
  mounted() {
    console.log("mounted");
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
</style>
