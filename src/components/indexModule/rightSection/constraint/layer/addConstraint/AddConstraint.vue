<style lang="scss" scoped>
@import "../../../../../../styles/mixin";
.add-constraint-container {
  position: relative;
  width:3.44rem;
  height:2.84rem;
  background:rgba(255,255,255,1);
  padding: 16px 15.5px;
  box-shadow:0 0 16px 0 rgba(31,31,31,0.12);

  .item-title {
    text-align: start;
    font-size: 13px;
    font-weight:bold;
    color:rgba(31,31,31,1);
  }

  .item-mode {
    @include flex-center;
    position: relative;
    width: 66.6%;
    margin-left: auto;
    margin-right: auto;
    height: 36px;
    border-bottom: rgba(230,230,230,1) solid 1px;
  }

  .item-edit-constraint {
    @include vertical-center;
    position: relative;
    width: 66.6%;
    margin-left: auto;
    margin-right: auto;
    height: 36px;
    border-bottom: rgba(230,230,230,1) solid 1px;
  }
}
</style>

<template>
  <div class="add-constraint-container">
    <div class="item-title">
      编辑字段约束
    </div>
    <div class="item-mode">
      <RadioGroup v-model="mode">
        <Radio label="单字段约束" style="margin-right: 114px"></Radio>
        <Radio label="多字段约束"></Radio>
      </RadioGroup>
    </div>
    <div class="item-edit-constraint">
      <Button type="primary" style="display: block; float: left">添加新约束</Button>
      <Button type="error" style="display: block; margin-left: 170px">删除</Button>
    </div>
    <div class="constraint-list-container">
    </div>
    <div class="item-button"></div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class AddConstraint extends Vue {
  private mode: string = '单字段约束';
}
</script>
