<template>
  <div>
    <span>model姓名：<input type='text' :value='cname' @input='changeCname'/></span>
    <span>姓名：{{ userName }}</span>，
    <span>年龄 ： {{ age }}</span>，
    <span>性别 ： {{ SEX[sex] }}</span>
    <button @click="changeAge(id)">年龄+1</button>
    <button @click="remove">删除</button>
  </div>
</template>
<script lang ='ts'>
import { Component, Prop, Emit, Model, Vue } from "vue-property-decorator";
enum Sex {
  "男" = 3,
  "女" = 2,
}
@Component
export default class Namelist extends Vue {
  // 相当于data中的值
  SEX: any = Sex;
  //计算userName
  get userName() {
    return this.name;
  }
  @Model('changeXMName', {type: String})
  cname!: string
  /*
    @Prop的写法
      @Prop(Number)
      @Prop([Number|String])
      @Prop({type: Number})
      @Prop({type: Number, default: 1})
  */
  @Prop(Number)
  id!: number;
  @Prop(String)
  name!: string;
  @Prop(Number)
  age!: number;
  @Prop({ type: Number, default: 2 })
  sex!: number;
  @Emit('on-remove')
  remove() {
    return this.id
  }
  /*
    @Emit() 可以加参数，即父组件的事件名，也可以不加，父子组件同名，但是子组件是驼峰式，父组件就是横杠式。
    子组件事件名如果有参数就不用return，ts会自动把参数带去父组件
  */
  @Emit()
  changeAge(id: number) {
    return id
  }
  @Emit('changeXMName')
  changeCname(e: any) {
    return e.target.value
  }
}
</script>