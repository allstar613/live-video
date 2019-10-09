import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'
import content from './modules/content'
import pay from './modules/pay'
import cdn from './modules/cdn'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    main,
    content,
    pay,
    cdn
  },
  strict: debug,
})
