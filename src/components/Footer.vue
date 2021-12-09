<template>
  <div class="last_page">
    <vl-map data-projection="EPSG:4326" style="height: 400px">
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      ></vl-view>

      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-feature>
        <vl-geom-multi-polygon
          :coordinates="[
            [
              [
                [-98.844959, 19.691586],
                [-98.842749, 19.69098],
                [-98.84217, 19.693122],
                [-98.844358, 19.693667],
                [-98.844959, 19.691586],
              ],
            ],
            [
              [
                [-98.84777, 19.684212],
                [-98.849079, 19.680596],
                [-98.845453, 19.679585],
                [-98.844466, 19.683384],
                [-98.84777, 19.684212],
              ],
            ],
          ]"
        ></vl-geom-multi-polygon>
      </vl-feature>
    </vl-map>
    <div class="map-title">
        მთავარი ფილიალი
    </div>
    <div class="partners">
      <div v-for="(partner, ind) in partners" :key="ind">
        <div v-if="partner !== null" >
          <a :href="partner.link">
            <div class="partners_info">
              <img :src="partner.image" alt="" />
              <div>{{partner.title}}</div>
            </div>
          </a>
        </div>
      </div>

      <!-- <a href="">
        <div class="partners_info">
          <img :src="'./assets/partner.png'" alt="" />
          <div>გორგია, თბილისი</div>
        </div>
      </a>
      <a href="">
        <div class="partners_info">
          <img :src="'./assets/partner.png'" alt="" />
          <div>გორგია, თბილისი</div>
        </div>
      </a>
      <a href="">
        <div class="partners_info">
          <img :src="'./assets/partner.png'" alt="" />
          <div>გორგია, თბილისი</div>
        </div>
      </a> -->
    </div>
    <div class="footer_wrapper">
        <div class="footer">
          
            <div class="footer-logo"><a href=""><img :src="'./assets/logo.png'" alt="" /></a></div> 
            <div class="footer-rights">© 2009-2021 All Rights Reserved.</div>
            <div class="footer-contact">
                <a v-if="contacts.number" :href="'tel:' + contacts.number">{{contacts.number}}</a>
                <div v-if="contacts.facebook" class="footer-facebook"><a :href="contacts.facebook" target="_blank"><img :src="'./assets/facebook.svg'" alt=""></a></div>
                <div v-if="contacts.instagram" class="footer-instagram"><a :href="contacts.instagram" target="_blank"><img :src="'./assets/instagram.svg'" alt=""></a></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["partners", "contacts"],
  data() {
    return {
      zoom: 15,
      center: [42.7151, 45.8271],
      rotation: 0,
    };
  },
};
</script>
<style>
.vl-map {
  position: absolute;
  top: 0;
}
.partners {
  display: flex;
  justify-content: space-between;
  padding: 50px 80px;
  margin-top: 300px;
}
.partners_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "MarkGEOCAPS-Light";
}
.partners_info img {
  margin-bottom: 16px;
  filter: grayscale(100%);
  transition: transform .4s;
}
.partners_info img:hover {
    transform: scale(1.1); 
    filter: grayscale(0%);
}
.footer_wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.footer {  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 10px 150px 10px 50px
}
.footer-rights {
    align-self: flex-end;
    color: #7E7E7E;
    font-family: "MarkGEOCAPS-Light";
}
.last_page {
    width: 100%
}
.footer-contact {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: "MarkGEOCAPS-Light";
}
.footer-facebook {
    padding: 0 13px;
    border-right: 1px solid #000;
 }
.footer-instagram {
    padding-left: 13px;
}
.partners, .footer_wrapper {
  background-color:white;
}
.map-title {
    background-color: white;
    font-size: 24px;
    padding: 12px;
    font-family: "MarkGEOCAPS-Bold";
    border: 1px solid #C8C8C8;
    border-radius: 0px 15px 15px 0px;
    position: absolute; 
    top: 20px;
}
.ol-zoom {
    top: 90px !important;
}

a {
  text-decoration: none;
  color: black;
}

@media screen and (max-width: 1190px) {
  .partners_info img {
    width: 200px
  }
  .partners_info {
    font-size: 14px
  }
  .partners {
    padding: 30px 70px;
    margin-top: 250px;
  }
  .footer {
    padding: 19px 150px 32px 50px;
  }
}
@media screen and (max-width: 1190px) {
  .partners_info img {
    width: 200px
  }
  .partners_info {
    font-size: 14px
  }
  .partners {
    padding: 30px 70px;
    margin-top: 250px;
  }
  .footer {
    padding: 19px 150px 32px 50px;
  }
}

@media screen and (max-width: 990px) {
  .partners_info img {
    width: 160px
  }
  .partners_info {
    font-size: 12px
  }
  .partners {
    padding: 10px 30px;
    margin-top: 250px;
  }
  .footer {
    padding: 19px 150px 32px 50px;
  }
}
@media screen and (max-width: 700px) { 
  .partners{
    display: flex;
    flex-direction: column;
    margin-top: 0px;
  }
  .vl-map {
    position: inherit;
  }
  .footer_wrapper {
    position: inherit;
  }
  .footer {
    font-size: 10px;
    padding: 15px 10px
  }
  .footer-contact {
    font-size: 12px
  }
  .footer-logo img{
    width:60px;
  }
}
</style>