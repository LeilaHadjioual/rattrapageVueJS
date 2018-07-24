import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import Project from './Project'
import VueRouter from 'vue-router'
import ProjectList from "./ProjectList";


Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: '/', component: ProjectList},
  { path: '/projet', name:'test', component: Project, props: true},
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})


