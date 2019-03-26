import Vue from "nativescript-vue";

Vue.registerElement("Video", () => require("nativescript-exoplayer").Video);

import Vuex from 'vuex'
Vue.use(Vuex)

import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

import { TNSFontIcon, fonticon } from './nativescript-fonticon';
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
    'fa': './fonts/font-awesome.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

import Home from './components/Home';
new Vue({
    render: h => h('frame', [h(Home)])
}).$start();
