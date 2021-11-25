<template>
  <div class="header">
      <img class="logo" :src="'/assets/logo.png'" alt="">
      <div class="navigation">
          <div class="navigation-about-us">
              <a href="#aboutUs">ჩვენს შესახებ</a>
          </div>
          <div class="navigation-where-to-buy"> 
               <a href="#Map"> სად შევიძინო?</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header {
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navigation {
    background: white;
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 24px
}
.navigation-about-us, .navigation-where-to-buy {
    padding: 0 30px ;
    font-family: MarkGEOCAPS-SemiBold;
}
.navigation-about-us {
    border-right: 2px solid black;
}
.logo {
    margin: 20px 0 0 20px;
}
@media screen and (max-width: 1100px) { 
    .navigation {
        display: none
    }
    .logo {
        width: 60px;
    }
    .header {
        background-color: #4D4D4D
    }
    .slick-dots {
        right:0 !important
    }

}
</style>