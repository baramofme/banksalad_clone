import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import themes from './theme';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes : {...themes},
  },
});
