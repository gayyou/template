<style lang="scss" scoped>

</style>

<template>   
     <LoginModule></LoginModule>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LoginModule from '@/components/loginModule/LoginModule.vue';

@Component({
    components: {
        LoginModule
    }
})
export default class Login extends Vue {

}
</script>
