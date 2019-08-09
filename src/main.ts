import Vue from 'vue';
import App from './App.vue';
import i18n from '@/i18n';
import router from '@/router/router';
import store from '@/store';
import './registerServiceWorker';

// Components
import './components';

// Plugins
import './plugins';
// import './plugins/axios'
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;

// Sync router with store
import {sync} from 'vuex-router-sync';

// Sync store with router
sync(store, router);

Vue.use(vuetify);

new Vue({
    i18n,
    vuetify,
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
