import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import { MultiPolygonGeom } from 'vuelayers'
import { Map, TileLayer, OsmSource, Geoloc, Feature, WmsSource } from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader
Vue.use(Map)
Vue.use(TileLayer)
Vue.use(OsmSource)
Vue.use(Geoloc)
Vue.use(WmsSource)
Vue.use(Feature)
Vue.use(MultiPolygonGeom)
Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h => h(App)
});