<!-- 单选或者多选的编辑模块  树干制作 -->
<style lang="scss" scoped>
// @import "../../../styles/mixin";
.con {
  width: 100%;
  height: 100%;
  
  .title {
    padding-bottom: 0.06rem;
    font-size: 0.15rem;
    font-weight: bold;
    text-align: left;
    border-bottom: 0.01rem solid rgba(230, 230, 230, 1);
  }
  .list-con {
    height: 78%;
    overflow-x: hidden;
  }
  .list-con label {
    display: block;
    margin: 0.1rem auto;
  }
  .list-con label div {
    margin-left: 0.1rem;
    padding: 0.03rem 0;
    display: inline-block;
    width: 1.8rem;
    color: #898989;
    box-shadow: 0px 0px 0px 1px rgba(95, 124, 220, 1);
    cursor: auto;
  }
  .button button {
    margin: 0.05rem 0.2rem;
    width: 0.92rem;
    height: 0.28rem;
    color: rgba(138, 138, 138, 1);
    border: 1px solid rgba(230, 230, 230, 1);
    background: linear-gradient(
      0deg,
      rgba(245, 245, 245, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    transition: all 0.3s;
  }
  .button button:hover {
    color: #fff;
    background: linear-gradient(
      0deg,
      rgba(74, 97, 173, 1) 0%,
      rgba(95, 125, 222, 1) 100%
    );
  }
}
</style>

<template>
  <div class="con">
    <div class="title">{{ title }}</div>
    <div class="list-con">
      <RadioGroup v-if="type=='Radio'" v-model="choice1">
        <Radio v-for="(list, index) in data" :key="index" :label="index">
          <div>{{list.id}}</div>
        </Radio>
      </RadioGroup>
      <CheckboxGroup v-else-if="type=='Checkbox'" v-model="choice2">
        <Checkbox v-for="(list, index) in data" :key="index" :label="index">
          <div>{{list.id}}</div>
        </Checkbox>
      </CheckboxGroup>
    </div>
    <div class="button">
      <button @click="fun1">保存</button>
      <button @click="fun2">取消</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class EditRadioOrCheckbox extends Vue {
  @Prop() type!: string;
  @Prop() data!: Object;
  choice1: string = "";
  choice2: Object = [];
  fun1() {
    console.log(this.choice1);
  }
  fun2() {
    console.log(this.choice2);
  }
  get title() {
    if (this.type == "Checkbox") {
      return "多选项";
    } else if (this.type == "Radio") {
      return "单选项";
    }
  }
}
</script>
