<style lang="scss" scoped>
@import "../../../../../../styles/mixin";
.add-filed-container {
  position: relative;
  width:3.44rem;
  height:2.84rem;
  background:rgba(255,255,255,1);
  padding: 26px 24.5px;
  box-shadow:0 0 16px 0 rgba(31,31,31,0.12);

  .item-name {
    font-size:15px;
    font-weight:bold;
    color:rgba(31,31,31,1);
    margin-bottom: 20px;
    text-align: start;
  }

  .input-item {
    @include vertical-center;

    position: relative;
    width: 100%;
    height: 36px;
    margin-bottom: 16px;

    span {
      margin-left: 12px;
      display: block;
      width:48px;
      height:12px;
      font-size:12px;
      font-weight:400;
      color:rgba(31,31,31,1);
    }

    input {
      display: block;
      margin-left: 23.5px;
      float: left;
      width:210px;
      height:36px;
      padding-left: 16.5px;
      padding-right: 16.5px;
      font-size:12px;
      font-weight:400;
      color:rgba(137,137,137,1);
      background:rgba(245,245,245,1);
    }
  }

  .constraint-item {
    @include vertical-center;

    position: relative;
    width: 100%;
    height: 24px;
    margin-bottom: 16px;

    span {
      display: block;
      margin-left: 12px;
      font-size:12px;
      font-weight:400;
      color:rgba(31,31,31,1);
    }
  }
}
</style>

<template>
  <div class="add-filed-container">
    <div class="item-name">添加字段</div>
    <div class="input-item">
      <span>数据字段</span>
      <input v-model="filedName"></input>
    </div>
    <div class="input-item">
      <span>字段含义</span>
      <input v-model="filedMeans"></input>
    </div>
    <div class="constraint-item">
      <span>单字段约束</span>
      <Button style="margin-left: .3rem" type="primary">
        多字段约束
        <Icon type="ios-arrow-down"></Icon>
      </Button>
    </div>
    <div class="constraint-item">
      <span>多字段约束</span>
      <Button style="margin-left: .3rem" type="primary"
        @click="save"
      >
        多字段约束
        <Icon type="ios-arrow-down"></Icon>
      </Button>
    </div>
    <div class="button-container">
      <Button style="margin-right: 26px;" type="primary">保存</Button>
      <Button @click="cancel">取消</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {pageManageStore} from "@/store/modules/PageManageStore";

@Component
export default class AddFiled extends Vue {
  public filedName: string = '';

  public filedMeans: string = '';

  cancel() {
    pageManageStore.setShowAddFiled(false);
  }

  save() {

  }
}
</script>
