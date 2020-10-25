import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Button } from 'element-ui'
// import { Select } from 'element-ui'
import ElementUI from 'element-ui';

//
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
