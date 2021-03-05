import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '../index'

const getlistArr = () =>{
  return new Promise<Array<number>>(resolve =>{
    setTimeout(()=>{
      resolve([1,2,3,4,5,6,7,8])
    },500)
  })
}

// 定义state的接口
export interface CAboutState {
  count: number;
  list: Array<number>;
}
@Module({
  name: 'about',
  dynamic: true,
  store
})
export default class About extends VuexModule implements CAboutState{
  // state部分
  count: number = 1;
  // list: Array<number> = [1, 2, 3, 4, 5, 6] // 方法一
  list: Array<number> = [] // 方法二，定义list为空数组
  // 这相当于getter 参数不用state
  get filterArr() {
    return this.list.filter(item => item % 2 === 0)
  }
  // 这相当于mutations  paylod 是mutations 的载荷 ，在大多数情况下是对象，这样可以换包含多个字段并且记录mutation会更易读
  @Mutation
  updateCount(payload: any) {
    this.count += payload.amount
  }
  @Mutation
  updateList(payload: Array<number>) {
    this.list = payload
  }
  // 相当于action
  @Action
  async getList() {
    // 异步调用某个方法
    const res = await getlistArr()
    this.updateList(res)
  }
}
export const AboutStore = getModule(About)