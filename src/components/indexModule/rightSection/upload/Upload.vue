<style lang="scss" scoped>
  .upload-warpper {
    height: 1rem;
    width: 90%;
    padding-top: .3rem;
    margin: 0 auto;
    
  }
  .upload-inner {
    padding: 1.5rem 0;
    p {
      padding-bottom: .1rem;
      color: #5F7DDE;
      font-size: .08rem
    }
  }
</style>

<template>
  <div class="upload-warpper">
    <Upload
        multiple
        type="drag"
        action=""
        >
        <div class="upload-inner" >
            <p>点击“上传”按钮或拖拽文件到该区域上传表单</p>
            <Button type="primary" size="large">上传</Button>
        </div>
    </Upload>
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class UploadContainer extends Vue {
  
}
</script>
