import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages
})

type objApp = {
  app: {
    i18n:VueI18n
  }
}

export default ({ app }:objApp) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }
