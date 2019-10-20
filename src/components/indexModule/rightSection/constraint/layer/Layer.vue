<style lang="scss" scoped>
.layer-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);

  .layer-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width:3.44rem;
    height:2.84rem;
    background:rgba(255,255,255,1);
    box-shadow:0 0 16px 0 rgba(31,31,31,0.12);

    .layer-name {
      width: 100%;
      height: .27rem;
      border-bottom: 1px solid rgba(230,230,230,1);

      span {
        float: left;
        width: 100%;
        display: block;
        text-align: start;
        font-size: .15rem;
        font-weight:bold;
        color:rgba(31,31,31,1);
      }
    }
  }
}
</style>

<template>
  <div class="layer-background" v-if="addFiledLayerStatus || addConstraintLayerStatus">
    <div class="layer-container">
      <add-filed v-if="addFiledLayerStatus"></add-filed>
      <add-constraint v-else-if="addConstraintLayerStatus"></add-constraint>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import AddFiled from '@/components/indexModule/rightSection/constraint/layer/addFiled/AddFiled.vue';
import {pageManageStore} from "@/store/modules/PageManageStore";
import AddConstraint from '@/components/indexModule/rightSection/constraint/layer/addConstraint/AddConstraint.vue';

@Component({
  components: {AddConstraint, AddFiled}
})
export default class Layer extends Vue {
  name: string = '字段名';

  get addFiledLayerStatus() {
    return pageManageStore.isShowAddFiledLayer;
  }

  get addConstraintLayerStatus() {
    return pageManageStore.isShowConstraintLayer;
  }
}
</script>
