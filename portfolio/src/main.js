// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Intro from './components/Intro';
import Resume from './components/Resume';

//use through middleware
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Intro},
    {path: '/resume', component: Resume}
  ]
});

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // template: '<App/>',
  // components: { App }
  router,
  template: `
  <div id='app'>
    <ul>
      <li><router-link to="/">Intro</router-link></li>
      <li><router-link to="/resume">Resume</router-link></li>
    </ul>
      <router-view></router-view>
  </div>
  `,
}).$mount('#app')
