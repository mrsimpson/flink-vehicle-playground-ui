import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import VueMatomo from "vue-matomo";
import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

const app = createApp(App);

app.use(router);
// .use(VueMatomo, {
//   host: "https://matomo.dilab.co",
//   siteId: 2,
//   router,
//   disableCookies: true,
// });

app.use(router)
app.use(OpenLayersMap);
app.mount("#app");
