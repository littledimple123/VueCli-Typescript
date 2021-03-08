<template>
  <div>
    pageThree
    <br />
    <p>{{ comItem.join(",") }}</p>
  </div>
</template>
<script lang='ts'>
import { Component, Watch, Vue } from "vue-property-decorator";
import * as _ from "lodash";
@Component({
  name: "PageThress",
})
export default class PageThress extends Vue {
  itemArr: Array<number> = [1, 2, 3, 4, 5, 6];
  get comItem() {
    const aab: number = 2;
    return _.concat(this.itemArr, aab);
  }
}
</script>