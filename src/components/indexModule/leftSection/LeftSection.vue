<style lang="scss" scoped>
@import "../../../styles/mixin";

.left-section {
  position: relative;
  width: 1.9rem;
  height: 100vh;
  background:linear-gradient(-90deg,rgba(70,77,92,1) 0%,rgba(57,63,76,1) 100%);
  box-shadow:0 9px 32px 0 rgba(47,51,61,0.48);

  .page-info {
    @include clear-float;

    position: relative;
    width: 100%;
    overflow: hidden;

    .logo-container {
      position: relative;
      width: .32rem;
      height: .32rem;
      margin: .24rem auto .12rem auto;

      img {
        width: 100%;
      }
    }

    span {
      display: block;
      width: 100%;
      font-size: .12rem;
      font-weight: 500;
      color:rgba(255,255,255,1);
    }
  }

  .module-list-container {
    @include clear-float;

    position: relative;
    width: 100%;
    margin-top: .28rem;
  }
}
</style>

<template>
  <div class="left-section">
    <div class="page-info">
      <div class="logo-container">
        <img />
      </div>
      <span class="page-name">智能审批后台管理系统</span>
    </div>
    <div class="module-list-container">
      <module-item
        v-for="(item) in moduleList"
        :key="item.id"
        :name="item.name"
        :icon-url="item.iconUrl"
        :id="item.id"
      ></module-item>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ModuleItem from '@/components/indexModule/leftSection/moduleItem/ModuleItem.vue';
import {pageManageStore} from "@/store/modules/PageManageStore";
@Component({
  components: {ModuleItem}
})
export default class LeftSection extends Vue {
  get moduleList() {
    return pageManageStore.moduleList;
  }
}
</script>
