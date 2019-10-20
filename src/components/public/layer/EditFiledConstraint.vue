<!-- 单字段约束的编辑字段约束模块  圣源制作 -->
<style lang="scss" scoped>
.constraint-container {
    position: absolute;
    width: 3.6rem;
    background-color: white;
    left: 50%;
    top: 50%;
    margin-top: -1.8rem;
    margin-left: -1.8rem;
}
.constraint-ul{
    position: relative;
    width: 66.6%;
    margin-left: auto;
    margin-right: auto;
    height: 125px;
    border-bottom: rgba(230,230,230,1) solid 1px;
    margin-top: 5px;
    margin-bottom: 0.1rem;
    overflow: auto;
}
 
.constraint-ul::-webkit-scrollbar {
	/*滚动条整体样式*/
	width: 4px;
	/*高宽分别对应横竖滚动条的尺寸*/
	height: 4px;
}
 
.constraint-ul::-webkit-scrollbar-thumb {
	/*滚动条里面小方块*/
	border-radius: 5px;
	-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
	background: rgba(0, 0, 0, 0.2);
}
 
.constraint-ul::-webkit-scrollbar-track {
	/*滚动条里面轨道*/
	-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
	border-radius: 0;
	background: rgba(0, 0, 0, 0.1);
}


.constraint-li{
    height: 18px;
    margin-bottom: 7px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.single-constraint{
    height: 100%;
    width: 80%;
    border:1px solid rgba(95,124,220,1);
    float: left;
    text-align: center;
    line-height: 18px;
}

.cancel-btn{
    margin-top: 3px;
    margin-left: 5px;
    height: 12px;
    width: 12px;
    float: left;
    background-color: red;
}

.sperate-line{
    width: 66.6%;
    height:1px;
    background:rgba(230,230,230,1);
    margin: auto;
    margin-bottom: 10px;
}

.edit-container{
    height: 10%;
    width: 100%;
}

.edit-content{
    height: 100%;
    width: 20%;
    text-align: center;
    line-height: 0.36rem;
    font-size: 0.11rem;
    font-family:Source Han Sans CN;
    font-weight:bold;
    margin-left: 0.09rem;
    color:rgba(31,31,31,1);
    font-family:Source Han Sans CN;
}

.container-btn{
    height: 6%;
    width: 66.6%;
    margin: auto;
    border-bottom:1px solid rgba(230,230,230,1);
    text-align: center;
    padding-bottom: 0.05rem;
    font-weight:400;
    color:rgba(31,31,31,1);
}

.add-cancel-contaier{
    height: 6%;
    width: 66.6%;
    margin: auto;
    border-bottom:1px solid rgba(230,230,230,1);
    text-align: center;
    padding-bottom: 0.05rem;
    margin-top: 0.05rem;
}

.sava-btn-container{
    height: 30px;
    width: 66.6%;
    margin: auto;
    text-align: center;
    margin-bottom: 0.05rem; 
}
</style>

<template>
        <div class="constraint-container">
            <div class="edit-container">
                <div class="edit-content">编辑字段约束</div>
            </div>
            <div class="container-btn">
                <Radio label="单字段约束" style="margin-right: 180px;"></Radio>
                <Radio label="多字段约束"></Radio>
            </div>
            <div class="add-cancel-contaier">
                <Button type="primary" style="display: block; float: left; margin-bottom:3px;">添加新约束</Button>
                <Button type="error" style="display: block; margin-left: 319px">删除</Button>
            </div>
            <div class = "constraint-ul">
                <div class="constraint-li"> 
                    <Radio v-model="single" style="margin-left: 5.5px;float: left;margin-top: 3px"></Radio>
                    <div class="single-constraint">单字段约束1</div>
                    <div class="cancel-btn"></div>
                </div>  
                <div class="constraint-li"> 
                    <Radio v-model="single" style="margin-left: 5.5px;float: left;margin-top: 3px"></Radio>
                    <div class="single-constraint">单字段约束1</div>
                    <div class="cancel-btn"></div>
                </div>  
                <div class="constraint-li"> 
                    <Radio v-model="single" style="margin-left: 5.5px;float: left;margin-top: 3px"></Radio>
                    <div class="single-constraint">单字段约束1</div>
                    <div class="cancel-btn"></div>
                </div>  
                <div class="constraint-li"> 
                    <Radio v-model="single" style="margin-left: 5.5px;float: left;margin-top: 3px"></Radio>
                    <div class="single-constraint">单字段约束1</div>
                    <div class="cancel-btn"></div>
                </div>  
                <div class="constraint-li"> 
                    <Radio v-model="single" style="margin-left: 5.5px;float: left;margin-top: 3px"></Radio>
                    <div class="single-constraint">单字段约束1</div>
                    <div class="cancel-btn"></div>
                </div> 
                <div class="constraint-li"> 
                    <Radio v-model="single" style="margin-left: 5.5px;float: left;margin-top: 3px"></Radio>
                    <div class="single-constraint">单字段约束1</div>
                    <div class="cancel-btn"></div>
                </div>
            </div> 
            <div class="sava-btn-container">
                <Button :size="buttonSize" type="primary">保存</Button>
                <Button :size="buttonSize" type="default" style="margin-left: 172px;">取消</Button>  
            </div> 
        </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
 

@Component
export default class EditFiledConstraint extends Vue {

}
</script>
