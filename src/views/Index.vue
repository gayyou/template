<style lang="scss" scoped>

</style>

<template>
  <index-module></index-module>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import IndexModule from '@/components/indexModule/IndexModule.vue';
@Component({
  components: {IndexModule}
})
export default class Index extends Vue {

}
</script>
