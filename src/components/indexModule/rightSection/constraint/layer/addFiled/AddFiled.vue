<style lang="scss" scoped>

</style>

<template>
  <div class="add-filed-container">
    <span class="title">添加字段</span>
    <div class="main-container">
      <div class="input-item">
        <span>数据字段</span>
        <input />
      </div>
      <div class="input-item">
        <span>字段含义</span>
        <input />
      </div>
      <div class="select-item">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AddFiled extends Vue {

}
</script>
