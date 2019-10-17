<style lang="scss" scoped>
.layer-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width:3.44rem;
  height:2.84rem;
  padding: .16rem;
  background:rgba(255,255,255,1);
  box-shadow:0 0 16px 0 rgba(31,31,31,0.12);

  .layer-name {
    width: 100%;
    height: .27rem;
    border-bottom: 1px solid rgba(230,230,230,1);

    span {
      width: 100%;
      display: block;
      text-align: start;
      font-size: .15rem;
      font-weight:bold;
      color:rgba(31,31,31,1);
    }
  }
}
</style>

<template>
  <div class="layer-container">
    <div class="layer-name">
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Layer extends Vue {
  name: string = '字段名';
}
</script>
