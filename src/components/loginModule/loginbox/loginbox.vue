<style lang="scss" scoped>
.login-box {
    position: absolute;
    top: 1.65rem;
    left:  50%;
    margin-left: -2.1rem;
    bottom: 1.35rem;
    height: 2.4rem;
    width: 4.2rem;
    background-color: red;
    background:linear-gradient(0deg,rgba(74,81,97,1) 0%,rgba(57,63,76,0.36) 80%);
    box-shadow:0px 0.09rem 42px 0px rgba(29,30,30,0.48);
    
    border-radius: 0.06rem;
}

.username-container{
    position: relative;
    width: 2.38rem;
    height: 0.36rem;
    margin: auto;
    margin-top: 0.38rem;
}

.username-image {
    position: absolute;
    width: 0.15rem;
    height: 0.21rem;
    top: 0.08rem;
    background-image: url(../../../assets/images/icons/user_name.png);
    background-size: 100%;
    background-repeat: no-repeat;
}

.username-input{
    position: absolute;
    height: 0.36rem;
    padding: 0;
    width: 1.93rem;
    left: 0.27rem;
    border: 0px;
    outline: none;
    padding-left: 0.17rem;
    background:rgba(93,102,122,1);
    color:rgba(204,204,204,1);
}

.password-container{
    position: relative;
    width: 2.38rem;
    height: 0.36rem;
    margin: auto; 
    margin-top: 0.16rem;
}

.password-image {
    position: absolute;
    width: 0.15rem;
    height: 0.21rem;
    top: 0.08rem;
    background-image: url(../../../assets/images/icons/password.png);
    background-size: 100%;
    background-repeat: no-repeat;
}

.password-input{
    position: absolute;
    height: 0.36rem;
    padding: 0;
    width: 1.93rem;;
    left: 0.27rem;
    border: 0px;
    outline: none;
    padding-left: 0.17rem;
    background:rgba(93,102,122,1);
    color:rgba(204,204,204,1);
}

input::-webkit-input-placeholder {
    color: #CCCCCC;
}

.remember-box {
    display: inline-block;
    width: 0.15rem;
    height: 0.15rem;
    border: 0.01rem solid rgba(255,255,255,1);
    cursor: pointer;
    margin-right: 3px;
    margin-top: 1px;
    vertical-align: middle;
}

.remenberme {
    display: inline-block;
    margin-right: 0.9rem;
    width:0.27rem;
    height:0.09rem;
    font-size:0.09rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    color:rgba(255,255,255,1);
    vertical-align: middle;

}

.forget-box{
    display: inline-block;
    width: 0.5rem;
    height: 0.09rem;
    top: 1.4rem;
    left: 2.7rem;
    font-size: 0.09rem;
    color: #FFFFFF;
    background-image: url(../../../assets/images/icons/password.png);
    vertical-align: middle;
}

.rem-forget-box{
    position: absolute;
    left: 50%;
    margin-left: -0.92rem;
    top: 1.4rem;
    width: 1.93rem;
    height:0.2rem;  
    font-size: 0; 
}

.confirm-btn{
    position: absolute;
    width: 0.92rem;
    height: 0.28rem;
    left: 1.05rem;
    top: 1.77rem;
    background:linear-gradient(0deg,rgba(74,97,173,1) 0%,rgba(95,125,222,1) 100%);
    text-align: center;
    line-height: 0.28rem;
}

.cancel-btn{
    position: absolute;
    width: 0.92rem;
    height: 0.28rem;
    background:linear-gradient(0deg,rgba(93,102,122,1) 0%,rgba(122,135,163,1) 100%);
    left: 2.23rem;
    top: 1.77rem;
    text-align: center;
    line-height: 0.28rem;
}

</style>

<template>
    <div class = "login-box">
        <div class = "username-container">
            <div class = "username-image"></div>
            <input class = "username-input" placeholder = "用户名" ref = "Username" maxlength="5">           
        </div>

        <div class = "password-container">
            <div class = "password-image"></div>
            <input type = "password" class = "password-input" placeholder = "密码" ref = "Password" maxlength="8">           
        </div>
        <div class="rem-forget-box">
            <input class = "remember-box" v-on:click = "isOnclick()" status = "deactive" ref = "remember" type="checkbox">
            <div class = "remenberme">记住我</div>
            <div class = "forget-box">忘记密码?</div>
        </div>
        <div class = "confirm-btn" v-on:click = "Judge()">确认</div>
        <div class = "cancel-btn">取消</div>
    </div>      
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class LoginModule extends Vue { 
     user: any = this.getCookie("username");  
    
    isNull (source: string) {
        if(source != null && source != 'undefined') {
            if(source.replace(/\s*/g,"") == "../../../assets/images/icons/password.png") 
                return false;
            return true;
        }
        return false
    }
    Judge () {
        let inputUser = <HTMLInputElement>document.getElementsByClassName("username-input")[0];
        let passWord = <HTMLInputElement>document.getElementsByClassName("password-input")[0];
        if(!this.isNull(inputUser.value) || !this.isNull(inputUser.value)) {
            alert("账号或密码不能为空");
        } else {
            if(inputUser.value == "test" && passWord.value == "123456") {
                alert("登陆成功");
            } else {
                alert("账号或密码错误");
            }
        }    
    }
    mounted() {
        console.log(document.cookie)
        this.checkCookie()        
    }
    isOnclick() {
        let rem_box = <HTMLInputElement>document.getElementsByClassName("remember-box")[0];
        let inputUser = <HTMLInputElement>document.getElementsByClassName("username-input")[0];
        let user: any = this.getCookie("username");

        if(rem_box.checked == false) {
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else {
            console.log(rem_box.checked)
            if(inputUser.value == "") {
                alert("请先输入密码");
                rem_box.checked = false;
                document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            }
            user = inputUser.value;
            this.setCookie("username", user, 365);
        }
    }
    setCookie(cname: string, cvalue: string, exdays: number) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";        
    }
    getCookie(cname: string) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name)  == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    checkCookie() {
        let rem_box = <HTMLInputElement>document.getElementsByClassName("remember-box")[0];
        let inputUser = <HTMLInputElement>document.getElementsByClassName("username-input")[0]
        let user: any = this.getCookie("username");
        if (user != "") {
            inputUser.value = document.cookie.split("=")[1]
            rem_box.checked = true;        
        }     
    }
}
</script>