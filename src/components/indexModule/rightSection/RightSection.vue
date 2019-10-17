<style lang="scss" scoped>
.right-section {
  flex: 1;
}
</style>

<template>
  <div class="right-section">
    <right-section-header></right-section-header>
    <div class="module-area">
      <router-view :key="key" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import RightSectionHeader from '@/components/indexModule/rightSection/header/RightSectionHeader.vue';
@Component({
  components: {RightSectionHeader}
})
export default class RightSection extends Vue {
  get key() {
    return this.$route.path;
  }
}
</script>
