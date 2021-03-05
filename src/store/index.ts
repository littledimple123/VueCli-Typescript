import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { CAboutState } from './module/about'
interface BRootState {
  about: CAboutState;    //这里的about就是about.ts里面@module的name
}
export default new Vuex.Store<BRootState>({})
