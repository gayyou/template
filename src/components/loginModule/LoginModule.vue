<style lang="scss" scoped>
.background-container {
    position: relative;
    height: 5.4rem;
    width: 9.6rem;
    background-color: green;
    background-size: 100%;
    background-image: url(../../assets/images/icons/login.png);
}

.square {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border: 0.04rem solid rgba(255,255,255,1);
    top: 0.8rem;
    left: 3.29rem;
}

.platform-name{
    position: absolute;
    left: 3.95rem;
    top: 0.94rem;
    width: 2.6rem;
    height: 0.23rem;
    font-size: 0.24rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(255,255,255,1);
}

.copyright {
    position: absolute;
    width: 0.5rem;
    height: 0.12rem;
    font-size: 0.12rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    bottom: 0.12rem;
    left: 4.57rem;
}

</style>

<template>
    <div class = "background-container">
        <loginbox></loginbox> 
        <div class = "square"></div>  
        <div class = "platform-name">智能审批后台管理平台</div>  
        <div class = "copyright">版本信息</div>  
        <EditFiledConstraint></EditFiledConstraint>        
    </div>   
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import loginbox from '@/components/loginModule/loginbox/loginbox.vue';
import EditFiledConstraint from "@/components/public/layer/EditFiledConstraint.vue"

@Component({
  components: {loginbox, EditFiledConstraint}
})
export default class LoginModule extends Vue {
    mounted() {
        this.reSize()            
    }
    reSize() {
        var whdef = 100/960;
        var wH = window.screen.availHeight;
        var wW = window.screen.availWidth;
        var rem = wW * whdef;
        
        document.documentElement.style.fontSize = rem + "px"
    }

}
</script>
