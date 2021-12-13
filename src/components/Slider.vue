<template>
  <div v-if="slider.length">
    <VueSlickCarousel v-bind="settings" class="desktop_slider">
      <div v-for="(slide, ind) in slider" :key="ind">
        <div class="slide_one" :style="{ backgroundColor: slide.background_color }">
          <div class="main_slide">
           <img v-if="slide['image URL'].length" :src="slide['image URL']" alt="surati" />
           <video v-if="slide['Video URL'].length" autoplay muted loop playsinline src="https://ak.picdn.net/shutterstock/videos/1053283298/preview/stock-footage-abstract-seamless-loop-of-d-render-neon-circle-blue-and-purple-neon-circles-abstract-futuristic.mp4"></video>
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
    <VueSlickCarousel v-bind="settings" class="mobile_slider">
      <div v-for="(slide, ind) in slider" :key="ind">
        <div class="backdrop"></div>
        
        <div class="slide_one" :style="{ backgroundImage: 'url(' + slide['image URL'] + ')', backgroundRepeat: 'no-repeat', backgroundPosition : 'center', backgroundSize: 'cover' }">
          <div class="main_slide">

          </div>
          <div class="slide_text">
            <video v-if="slide['Video URL'].length" autoplay muted loop playsinline src="https://ak.picdn.net/shutterstock/videos/1053283298/preview/stock-footage-abstract-seamless-loop-of-d-render-neon-circle-blue-and-purple-neon-circles-abstract-futuristic.mp4"></video>
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
                infinite:false,
                dotsClass: "slick-dots custom-dot-class",
            },
        }
    },
    components: { VueSlickCarousel },
  }
</script>

<style>
.mobile_slider {
  display: none !important;
}
.backdrop {
  position: absolute;
  width: 100%;
  opacity: 0.2;
  height: 100%;
  background: black;
  z-index: 1;
  pointer-events: none;
}
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
  padding-right: 30px;
  z-index: 200;
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
    bottom: 25px;
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
}
video {
  min-height: 100%;
  min-width: 100%;
}
@media screen and (max-width: 1100px) { 
  video {
    width: 60%;
    margin: 12px auto;
  }
  .mobile_slider {
    display: block !important;
  }
 .desktop_slider {
   display: none !important;
 }
 .slide_text__title {
   font-size: 24px
 }
 .slide_text__desc {
   font-size: 14px
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