<style lang="scss" scoped>
@import "../../../../styles/mixin";
.constraint-container {
  @include clear-float;

  position: relative;
  width: 100%;

  .constraint-header {
    position: relative;
    width: 6.9rem;
    height: .28rem;
    margin-left: .4rem;
    margin-top: .18rem;

    .table-name {
      display: block;
      float: left;
      font-size: .18rem;
      font-weight: bold;
      color: rgba(31,31,31,1);
    }

    .table-tool {
      position: relative;
      float: right;
      height: .4rem;
      width: 2.65rem;

      button {
        float: left;
        font-size: .12rem;
        font-weight:400;
        color:rgba(255,255,255,1);
        background:linear-gradient(0deg,rgba(74,97,173,1) 0%,rgba(95,125,222,1) 100%);
        padding: .04rem .115rem;
      }

      button:nth-child(2),
      button:nth-child(3) {
        margin-left: .14rem;
      }
    }
  }
}
</style>

<template>
  <div class="constraint-container">
    <div class="constraint-header">
      <span class="table-name">表单名称</span>
      <div class="table-tool">
        <button>添加字段</button>
        <button>删除字段</button>
        <button>编辑字段约束</button>
      </div>
    </div>
    <Table></Table>
    <Layer></Layer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Table from '@/components/indexModule/rightSection/constraint/table/Table.vue';
import Layer from '@/components/indexModule/rightSection/constraint/layer/Layer.vue';
@Component({
  components: {Layer, Table}
})
export default class Constraint extends Vue {

}
</script>
