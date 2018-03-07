import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
// Como 'rutas' viene del archivos rutas.js a través de un export, hay que importarlo a través de las llaves {}
import { rutas } from './rutas.js';


Vue.use(VueResource); // Con esto ya se puede usar vue-resource en el proyecto 
Vue.use(VueRouter); // Con esto ya se puede usar vue-router en el proyecto

// Variable global que se usará para las llamadas a la base de datos mediante $http
//Vue.http.options.root = 'https://tareas-vue.firebaseio.com';

// Ahora hay que pasar las rutas al Enrutador
const enrutador = new VueRouter({
  //Con el modo 'history' quitamos el hash (#) de la url. Si queremos más info, sobre todo en PRO, vamos a la página https://router.vuejs.org/en/essentials/history-mode.html
  mode: 'history',
  routes: rutas
});

new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
});
