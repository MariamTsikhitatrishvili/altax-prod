<template>
  <div v-if="slider.length">
    <VueSlickCarousel v-bind="settings">
      <div v-for="(slide, ind) in slider" :key="ind">
        <div class="slide_one" :style="{ backgroundColor: slide.background_color }">
          <div class="main_slide">
           <img :src="slide['image URL']" alt="surati" />
          </div>
          <div class="slide_text">
            <h1 class="slide_text__title">{{slide.title}}</h1>
            <div class="slide_text__desc">
              {{slide.desc}}
            </div>
          </div>
        </div>
      </div>
        
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    props: ["slider"],
    data: function () {
        return {
            settings: {
                dots: true,
                dotsClass: "slick-dots custom-dot-class",
            },
        }
    },
    components: { VueSlickCarousel },
  }
</script>

<style>
.main_slide {
  height:100vh;
  width: 60%;
}
.slide_one {
  display: flex !important;
  align-items: center;
  padding-bottom: 12px;
}
.main_slide img{
  width: 100%;
  height: 102%
}
.slide_text{
  max-width: 480px;
  color: #fff;
  padding-left: 80px;
  padding-right: 20px;
}
.slide_text__title {
  font-size:  42px;
  padding-bottom: 24px;
  border-bottom: 2px solid #fff;
  margin-bottom: 24px;
  font-family: MarkGEOCAPS-SemiBold;
}
.slide_text__desc {
  font-size:  18px;
  line-height: 1.8;
  font-family: MarkGEO-Light;
}

.custom-dot {
    width: 15px;
    height: 15px;
    background-color: #fff;
}
.slick-dots {
    z-index: 1000;
    position: absolute;
    bottom: 10px;
    right: 43%;
}

.slick-dots li.slick-active button:before {
    width: 15px !important;
    height: 15px !important;
    border-radius: 0 !important;
    background-color: #E3000F;
    color: transparent !important;
    border: 3px solid #fff;
}
.slick-dots button:before {
    width: 15px !important;
    height: 15px !important;
    border-radius: 0 !important;
    background: #fff;
    color: transparent !important;
    border: 3px solid #fff;
    opacity: 1;
}
.main_slide {
    background-image: url('/assets/slider.png') ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
@media screen and (max-width: 1100px) { 
 .main_slide img{
  display: none !important;

 }
 .slide_text__title {
   font-size: 24px
 }
 .slide_text__desc {
   font-size: 16px
 }
 .main_slide {
  background-image: none !important;
  width: 0;
 }
 .slide_text {
   padding-left: 30px
 }
}
</style>