// vue
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import vuetify from "./plugins/vuetify";

import "@babel/polyfill";

// i18n
import VueI18n from "vue-i18n";
import messages from "@/locales";

// bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// i18n
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "ru",
  fallbackLocale: "en",
  messages,
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
