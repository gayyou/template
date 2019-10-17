<style lang="scss" scoped>
@import "../../../../styles/mixin.scss";
.item-container {
  cursor: pointer;
  position: relative;
  width: 100%;
  height: .48rem;
  margin-bottom: .18rem;

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

    img {
      display: block;
      width: .22rem;
      height: .31rem;
      margin-left: .44rem;
    }

    span {
      display: block;
      font-size: .18rem;
      font-weight: 300;
      color:rgba(255,255,255,1);
      margin-left: .17rem;
    }
  }
}
</style>

<template>
  <div class="item-container"
    @click="changeModule"
  >
    <div class="choice-label" :class="currentModuleID === id ? '' : 'choice-label-active'"></div>
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

  @Prop() routerName!: string;

  changeModule() {
    pageManageStore.setCurrentModuleID(this.id);
    this.$router.push({
      name: this.routerName
    });
  }

  get currentModuleID() {
    return pageManageStore.currentModuleID;
  }
}
</script>
