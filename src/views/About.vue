<template>
  <div class="about">
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <p>{{ fullName }}</p>
    <button @click="resetName">修改fullName</button>
    <hr />
    <!-- 使用v-bind向子组件传值 -->
    <nameList
      v-for="item in arrlist"
      :key="item.id"
      v-bind="item"
      v-model="item.name"
      @on-remove="remove"
      @change-age="changeAge"
    />
  </div>
</template>
<script lang='ts'>
import { Component, Watch, Vue } from "vue-property-decorator";
import NameList from "../components/NameList.vue";
//定义一个接口
interface Iuser {
  id: number;
  name: string;
  age: number;
  sex?: number;
}
@Component({
  name: "About", // 相当于原来的export default {name:'About'}
  components: {
    // 公共组件写在这里面
    NameList,
  },
})
export default class Abouts extends Vue {
  firstName: string = "张";
  lastName: string = "三";
  //定义一个数组  //双数女，单数男
  arrlist: Array<Iuser> = [
    {
      id: 0,
      name: "张三",
      age: 20,
      sex: 2,
    },
    {
      id: 1,
      name: "李三",
      age: 20,
      sex: 3,
    },
    {
      id: 2,
      name: "李三",
      age: 20,
    },
  ];
  // 相当于原来的计算 computed 中的get 和 set
  get fullName() {
    return this.firstName + "" + this.lastName;
  }
  set fullName(val) {
    const arrs = val.split("");
    this.firstName = arrs[0];
    this.lastName = arrs[1];
  }
  // 原来的methods
  resetName() {
    this.fullName = "李四";
  }
  // 监听
  @Watch("fullName") // 监听某个属性的变化
  onfullName(newv: string, oldv: string) {
    // 自定义监听的方法
    console.log("newv", newv);
    console.log("oldv", oldv);
  }
  //生命周期函数和之前一样
  // created() {}
  // mounted() {}
  remove(id: number) {
    const ids: number = this.arrlist.findIndex((item) => item.id === id);
    this.arrlist.splice(ids, 1);
  }
  changeAge(id: number) {
    const ids: number = this.arrlist.findIndex((item) => item.id === id);
    this.arrlist[ids].age ++
  }
}
</script>