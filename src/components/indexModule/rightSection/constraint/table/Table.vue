<style lang="scss" scoped>
@import "../../../../../styles/mixin";
.table-container {
  @include clear-float;
  position: relative;
  width: 6.9rem;
  margin-left: .4rem;

  .table-row {
    position: relative;
    display: flex;
    width: 6.90rem;
    height: .36rem;
    background: rgba(255,255,255,1);
    border: 1px solid rgba(230,230,230,1);

    .table-cell {
      @include flex-center;
      position: relative;
      width: 2.3rem;
      height: .36rem;
    }

    .table-cell:nth-child(1) {
      border-right: 1px solid rgba(95,125,222,1);
    }

    .table-cell:nth-child(2) {
      border-right: 1px solid rgba(95,125,222,1);
    }

    .table-head {
      font-size: .12rem;
      font-weight: bold;
      color:rgba(31,31,31,1);
    }

    .table-value {
      font-size: .09rem;
      font-weight:400;
      color:rgba(31,31,31,1);
    }
  }
}

</style>

<template>
  <div class="table-container">
    <div class="table-row">
      <div class="table-cell">
        <span class="table-head">数据字段</span>
      </div>
      <div class="table-cell">
        <span class="table-head">字段含义</span>
      </div>
      <div class="table-cell">
        <span class="table-head">字段约束</span>
      </div>
    </div>
    <div class="table-row">
      <div class="table-cell">
        <span class="table-value">键名</span>
      </div>
      <div class="table-cell">
        <span class="table-value">键值</span>
      </div>
      <div class="table-cell">
        <Button type="primary">
          单字段约束
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <Button style="margin-left: .12rem" type="primary">
          多字段约束
          <Icon type="ios-arrow-down"></Icon>
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Table extends Vue {

}
</script>
