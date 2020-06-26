import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';


Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
 
});

// axios
import axios from "./axios.js"
Vue.prototype.$http = axios

// VeeValidate for forms
import { ValidationProvider } from 'vee-validate';
Vue.component('ValidationProvider', ValidationProvider);
import { extend } from 'vee-validate';
import { required, email, alpha_spaces, numeric,min } from 'vee-validate/dist/rules';
import { setInteractionMode } from 'vee-validate';
setInteractionMode('lazy');
// Valdation rules
extend('email', email);
extend('alpha_spaces', alpha_spaces);
extend('numeric', numeric,);
extend('required', required);
extend('min', min);
// extend('required', {
//   ...required,
//   message: 'This field is required'
// });
import { ValidationObserver } from 'vee-validate';
Vue.component('ValidationObserver', ValidationObserver);
// VeeValidate ends


// VueToastr for Notifications
import VueToastr from 'vue-toastr'
Vue.use(VueToastr, {
  defaultTimeout: 3000,
  defaultProgressBar: false,
  defaultProgressBarValue: 0,
  defaultType: "error",
  defaultPosition: "toast-bottom-right",
  defaultCloseOnHover: false,
  defaultClassNames: ["animated", "zoomInUp"]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
 


