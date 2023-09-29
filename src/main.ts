import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 加载全局样式
import '@root/global.css';
import '@root/global.less';
import '@root/global.scss';

// vant样式
import 'vant/lib/index.css';

// font-awesome图标
import 'font-awesome/css/font-awesome.min.css';

// mock
import '@/database/index';


const rainbow = createApp(App);

import means from '@/public/index.js';
rainbow.config.globalProperties.$means = means;

// axios
import apiHttp from '@sky/axios/request2/http.js';
rainbow.config.globalProperties.$apihttp = apiHttp;


import VueAMap from 'vue-amap'
import VueCookies from 'vue-cookies';



rainbow
.use(VueAMap)
.use(VueCookies)
.use(store)
.use(router)
.mount('#app')
