<template>
  <div>
    <span>姓名：{{ userName }}</span
    >， <span>年龄 ： {{ age }}</span
    >，
    <span>性别 ： {{ sex }}</span>
  </div>
</template>
<script lang ='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Namelist extends Vue {
  //计算userName
  get userName() {
    return this.name;
  }
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
  @Prop({ type: Number, default: 1 })
  sex!: number;
}
</script>