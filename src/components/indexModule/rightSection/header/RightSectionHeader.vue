<style lang="scss" scoped>
@import "../../../../styles/mixin";
.right-section-header {
  position: relative;
  width: 100%;
  height: .42rem;
  border-bottom: 1px solid rgba(230,230,230,1);

  .user-info-container {
    @include vertical-center;
    position: relative;
    float: right;
    width: 1.5rem;
    height: .42rem;

    div {
      float: left;
      font-size: .09rem;
      font-weight: 400;
      color: rgba(31,31,31,1);
    }

    .current-date {
      font-weight: bold;
      color: rgba(95,125,222,1);
    }

    .user-info {
      cursor: pointer;
      margin-left: .19rem;
    }

    .exit-button {
      cursor: pointer;
      margin-left: .18rem;
    }
  }
}
</style>

<template>
  <div class="right-section-header">
    <div class="user-info-container">
      <div class="current-date">{{ currentTime }}</div>
      <div class="user-info">个人中心</div>
      <div class="exit-button">退出</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {getCurrentDate} from '@/utils/shared';

@Component
export default class RightSectionHeader extends Vue {
  private currentTime: string = '';

  mounted() {
    this.currentTime = getCurrentDate()
  }
}
</script>
