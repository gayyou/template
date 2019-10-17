<style lang="scss" scoped>
@import "../../../../styles/mixin.scss";
.item-container {
  position: relative;
  width: 100%;
  height: .48rem;

  .choice-label {
    position: absolute;
    width: .08rem;
    height: .48rem;
    top: 0;
    left: 0;
  }

  .choice-label-active {
    background-color: #5F7DDE;
  }

  .item-info {
    @include vertical-center;

    position: relative;
    width: 100%;
    height: .48rem;
  }
}
</style>

<template>
  <div class="item-container"
    @click="changeModule"
  >
    <div class="choice-label" :class="currentModuleID === id ? 'choice-label-active' : ''"></div>
    <div class="item-info">
      <img :src="iconUrl" />
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {pageManageStore} from "@/store/modules/PageManageStore";

@Component
export default class ModuleItem extends Vue {
  @Prop() name!:string;

  @Prop() id!: number;

  @Prop() iconUrl!: string;

  changeModule() {
    pageManageStore.setCurrentModuleID(this.id);
  }

  get currentModuleID() {
    return pageManageStore.currentModuleID;
  }
}
</script>
