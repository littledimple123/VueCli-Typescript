declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
import * as lodash from 'lodash';
declare global { // 全局变量设置
  const _: typeof lodash
}