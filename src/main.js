import config from '@/config.json';
import Room from '@/models/Room';
import './registerServiceWorker';
// import { ErrorService } from './ErrorService.js';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueSocketIO from 'vue-socket.io';

import SoteriaIcon from './components/svg/safeInSistersLogo.vue';
Vue.component('soteria-icon', SoteriaIcon);
Vue.config.productionTip = false;

const nullRoom = { room: '', id: '', nsp: '' };

let url =
  process.env.NODE_ENV == 'development'
    ? config.ioServerUrl
    : config.ngrokUrlUbuntu;

Room.$fetch().then(() => {
  console.log('---------------main.js-----------------------');

  const lastRoom = Room.query()
    .orderBy('lastOpened', 'desc')
    .first();

  const { room, id, nsp } = lastRoom ? lastRoom : nullRoom;
  const options = {
    query: { room: room, id: id, nsp: nsp },
  };
  console.log('url:', url);
  console.log('options:', options);
  console.log(process.env.NODE_ENV);
  console.log('--------------------------------------------');
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: url,
      options: options,
      // we assign a query with the id we generate so socket.io server will defer to that for the new socket.id
      autoConnect: false,
    })
  );

  // Vue.config.errorHandler = (error) => ErrorService.onError(error);
  Vue.prototype.$showDetails = false;
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
});
