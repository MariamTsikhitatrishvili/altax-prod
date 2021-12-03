<template>
  <div class="product">
    <img :src="product.background_img" class="product_back" alt="" />
    <div class="background-linear"></div>
    <div class="product_info">
      <h1>{{ product.title }}</h1>
      <p>{{ product.short_desc }}</p>
    </div>
    <div class="product_info_flex">
      <div class="product_img">
        <img :src="product.product_img" alt="" />
      </div>
      <div v-if="showFirstPopup" class="first_popup">
        <div class="product_features">
          <div
            class="product_feature"
            v-for="feature in product.features"
            :key="feature.id"
          >
            <div><img :src="feature.feature_img" alt="" /></div>
            <div class="first_popup__feature_name">
              {{ feature.feature_name }}
            </div>
            <div class="first_popup__feature_desc">
              {{ feature.feature_desc }}
            </div>
          </div>
        </div>
        <div class="available_colors">
          <h3>ხელმისაწვდომი ფერები</h3>
          <div class="available__colors">
            <div v-for="color in product.available_colors" :key="color">
              <div
                class="available__color"
                :style="{ backgroundColor: color }"
              ></div>
            </div>
          </div>
        </div>
        <div class="available_capacity">
          <h3>ხელმისაწვდომი მოცულობები</h3>
          <div class="available_capacity_flex">
            <div
              class="available_capacity_item"
              v-for="capacity in product.available_capacities"
              :key="capacity.id"
            >
              <div>{{ capacity.capacity }}ლ</div>
            </div>
          </div>
        </div>
        <div class="see__more" @click="toggleSeeMore">ვრცლად</div>
      </div>
      <div v-if="showSeeMore" class="seeMorePopUp">
        <div class="showSeeMore__firstSection">
          <div
            class="seeMorePopUp__product_feature"
            v-for="feature in product.features"
            :key="feature.id"
          >
            <div><img :src="feature.feature_img" alt="" /></div>
            <div class="feature_name">{{ feature.feature_name }}</div>
          </div>
        </div>
        <div class="showSeeMore__SecondSection">
          <div
            v-for="capacity in product.available_capacities"
            class="showSeeMore__SecondSection_option"
            :key="capacity.id"
          >
            <div class="showSeeMore__SecondSection_option__capacity">
              {{ capacity.capacity }}ლ
            </div>
            <div class="showSeeMore__SecondSection_option__line"></div>
            <div class="showSeeMore__SecondSection_option__title">დაფარვა</div>
            <div class="showSeeMore__SecondSection_option__fill">
              {{ capacity.fill }}მ<sup>2</sup>
            </div>
          </div>
        </div>
        <div class="seeMorePopUp__desc">
          {{ product.long_desc }}
        </div>
        <div class="closeSeeMorePopUp" @click="closeSeeMore">
          <img :src="'./assets/back.svg'" alt="" />
          უკან
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      showFirstPopup: true,
      showSeeMore: false,
    };
  },
  methods: {
    toggleSeeMore() {
      this.showFirstPopup = false;
      this.showSeeMore = true;
    },
    closeSeeMore() {
      this.showFirstPopup = true;
      this.showSeeMore = false;
    },
  },
};
</script>

<style>
.background-linear{ 
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 90%);
}
.product_back {
  pointer-events: none;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  object-fit: cover;
  background-size: cover;
}
.product_info {
  max-width: 500px;
  padding-left: 16px;
  border-left: 2px solid white;
  color: white;
  margin-left: 56px;
  margin-top: 56px;
}
.product {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.product_info h1 {
  font-size: 35px;
  font-family: "MarkGEOCAPS-Bold";
  margin: 14px 0;
}
.product_info p {
  font-size: 16px;
  line-height: 1.5;
  font-family: "MarkGEOCAPS-Light";
}
.product_img {
  max-width: 380px;
  margin-left: 56px;
  margin-bottom: 45px;
}
.product_img img {
  width: 100%;
  height: 100%;
}
.product_info_flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.first_popup {
  background: #ffffff;
  opacity: 0.9;
  border-radius: 12px;
  position: relative;
  padding: 32px 24px;
  margin-right: 80px;
  margin-top: 20px;
  max-width: 600px;
  min-height: 350px;
}
.seeMorePopUp {
  background: #ffffff;
  opacity: 0.9;
  padding: 32px 24px;
  border-radius: 12px;
  margin-right: 80px;
  position: relative;
  margin-top: 20px;
  max-width: 600px;
  min-height: 350px;
}
.product_features {
  display: flex;
  align-self: center;
  text-align: center;
  justify-content: space-around;
}
.product_feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #d5d5d5;
}
.available_colors {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-family: "MarkGEOCAPS-Bold";
}
.available_colors {
  padding-bottom: 24px;
  border-bottom: 1px solid #d5d5d5;
}
.available_capacity_flex {
  display: flex;
  align-items: center;
}
.available_capacity {
  font-family: "MarkGEOCAPS-Bold";
}
.available_capacity_item {
  margin-right: 24px;
}
.see__more {
  padding: 10px 20px;
  background: #e3000f;
  color: #ffffff;
  position: absolute;
  right: -15px;
  bottom: -20px;
  cursor: pointer;
  font-family: MarkGEOCAPS-Bold;
}
.seeMorePopUp__product_feature {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.showSeeMore__firstSection,
.showSeeMore__SecondSection {
  display: flex;
  justify-content: space-around;
  margin-bottom: 32px;
}
.first_popup__feature_name {
  font-size: 18px;
  font-family: "MarkGEOCAPS-SemiBold";
}
.first_popup__feature_desc {
  font-size: 14px;
  color: #848484;
  font-family: "MarkGEO-Light";
}
.seeMorePopUp__desc {
  max-width: 600px;
  font-family: "MarkGEO-Light";
}
.closeSeeMorePopUp {
  cursor: pointer;
  padding: 9px 30px;
  color: white;
  background: #4d4d4d;
  position: absolute;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: MarkGEOCAPS-Bold;
}
.closeSeeMorePopUp img {
  margin-right: 8px;
}
.showSeeMore__SecondSection_option {
  background: #4d4d4d;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
.showSeeMore__SecondSection_option__capacity {
  font-family: MarkGEOCAPS-Bold;
  font-size: 16px;
}
.showSeeMore__SecondSection_option__line {
  width: 90%;
  height: 2px;
  background: #d3650e;
}
.showSeeMore__SecondSection_option__title {
  font-size: 14px;
}
.showSeeMore__SecondSection_option__fill {
  font-size: 20px;
}
.product_feature:not(:last-child) {
  margin-right: 24px;
}
.available__color {
  width: 36px;
  height: 36px;
  border: 1px solid #000000;
  border-radius: 50%;
  margin-right: 16px;
}
.available__colors {
  display: flex;
}
@media screen and (max-width: 1500px) {
  .first_popup, .seeMorePopUp {
    margin-top: 0px;
  }
}

@media screen and (max-width: 1190px) {
  .product_info h2 {
    font-size: 28px;
  }
  .first_popup, .seeMorePopUp {
    min-height: 350px;
    margin-top: 10px;
  }
  .product_img{
    margin-bottom: -65px;
  }
  .product_info p {
    font-size: 16px;
  }
  .seeMorePopUp__desc {
    font-size: 14px;
  }
  .feature_name {
    font-size: 14px;
  }
  .showSeeMore__SecondSection_option__capacity {
    font-family: MarkGEOCAPS-Bold;
    font-size: 14px;
  }
  .showSeeMore__SecondSection_option__title {
    font-size: 12px;
  }
  .showSeeMore__SecondSection_option__fill {
    font-size: 18px;
  }
  .product_img img {
    width: 300px;
    margin-right: 20px;
  }
  .product {
    justify-content: space-around;
  }
}
@media screen and (max-width: 890px) {
  .product_info h2 {
    font-size: 24px;
  }
  .first_popup, .seeMorePopUp {
    min-width: 80%;
    min-height: 300px;
  }
  .product_img{
    margin-bottom: 0px;
  }
  .first_popup{
    margin-right: 0;
  }
  .first_popup__feature_name {
    font-size: 14px;
  }
  .first_popup__feature_desc {
    font-size: 12px;
  }
  .product {
    justify-content: space-evenly;
  }
  .product_info_flex{
    flex-direction: column;
  }
  .product_info {
    margin-top: 0;
    margin-left: 10px;
  }
  .product_info p {
    font-size: 12px;
  }
  .seeMorePopUp__desc {
    font-size: 12px;
  }
  .feature_name {
    font-size: 14px;
  }
  .available_colors {
    font-size: 14px;
  }
  .available_capacity h3{
    font-size: 14px;
  }
  .available__color {
    width: 20px;
    height: 20px;
  }
  .available_capacity_item {
    font-size: 12px;
  }
  .product_img img {
    width: 210px;
    margin-right: 40px;
  }
  .see__more {
    right: 0px;
    bottom: 0px;
  }
  .seeMorePopUp {
    margin-right: 0;
  }
  .closeSeeMorePopUp {
    right: 0;
    bottom: 0;
  }
}
@media screen and (max-width: 480px) { 
  .showSeeMore__firstSection {
    display: none;
  }
  .product_info h1 {
    font-size: 24px;
    margin: 0;
  }
  .product_img img  {
    width: 150px;
  }
  .first_popup, .seeMorePopUp {
    border-radius: 0;
  }
  input {
    padding: 15px 130px 15px 5px;
  }
  .contact-us--mob-info {
    flex-wrap: wrap;
  }
  .contact-us--mob-info--mob, .contact-us--mob-info--email {
    margin-bottom: 20px;
  }
  .background-linear {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 70%);
  }
}

</style>