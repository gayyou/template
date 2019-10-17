<style lang="scss" scoped>
.right-section {
  position: relative;
  flex: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div class="right-section">
    <right-section-header></right-section-header>
    <div class="module-area">
      <transition
        name="fade"
      >
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import RightSectionHeader from '@/components/indexModule/rightSection/header/RightSectionHeader.vue';
import Layer from '@/components/indexModule/rightSection/constraint/layer/Layer.vue';
@Component({
  components: {Layer, RightSectionHeader}
})
export default class RightSection extends Vue {
  get key() {
    return this.$route.path;
  }
}
</script>
