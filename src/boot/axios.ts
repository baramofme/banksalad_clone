import axios, {AxiosInstance} from 'axios';

type objVue = {
  Vue: {
    prototype: {
      $axios : AxiosInstance
    }
  }
}

export default async ({ Vue }:objVue) => {
  Vue.prototype.$axios = axios
}
