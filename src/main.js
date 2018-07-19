import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './ProjectsList.vue'
import Project from './Project/Project'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
