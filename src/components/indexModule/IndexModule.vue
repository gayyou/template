<style lang="scss" scoped>
@import "../../styles/mixin.scss";

.index-page {
  @include flex-center;

  position: relative;
  width: 100%;
}
</style>

<template>
  <div class="index-page">
    <left-section></left-section>
    <right-section></right-section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LeftSection from '@/components/indexModule/leftSection/LeftSection.vue';
import RightSection from '@/components/indexModule/rightSection/RightSection.vue';
import {ExampleStore} from "@/store/modules/ExampleModule";

@Component({
  components: {
    LeftSection,
    RightSection
  }
})
export default class IndexModule extends Vue {
  mounted() {
    ExampleStore.setMsg("message");
  }
}
</script>
