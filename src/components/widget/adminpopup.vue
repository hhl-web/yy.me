<template>
  <div class="admin-pop">
      <div class="pop-title">发布文章</div>
      <div class="pop-block">
          <span class="label">分类:</span>
          <div class="content">
              <template v-for="(item,index) in classifyOpts" :key="index">
                  <span class="tag">{{item.label}}</span>
              </template>
          </div>
      </div>
      <div class="pop-block">
          <span class="label">文章封面:</span>
          <div class="content">
            <van-uploader :after-read="afterRead"></van-uploader>
            <div class="tip"></div>
          </div>
      </div>
      <div class="pop-block footer">
          <van-button class="btn" type="default" @click="cancel">取消</van-button>
          <van-button class="btn" type="primary" @click="submit">发布</van-button>
      </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent,ref } from 'vue'
  export default defineComponent({
    name: 'AdminPop',
    setup() {
      const classifyOpts =ref([])
      const afterRead=(file:File)=>{
        console.log(file)
      }
      const submit =()=>{

      }
      const cancel=()=>{
        
      }
      return{
        classifyOpts,
        afterRead,
        submit,
        cancel
      }
    }
  })
</script>

<style lang="scss" scoped>
.admin-pop{
  position: absolute;
  margin: 1.8rem -3rem 0 0;
  top: 35px;
  right: 0;
  width: 560px;
  font-size: 1rem;
  white-space: nowrap;
  color: #909090;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  box-shadow: 0 1px 2px #f1f1f1;
  cursor: default;
  z-index: 99999999;
}
.pop-block{
  margin: 10px;
}
.pop-title {
    padding: 24px 20px 16px 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #1d2129;
    border-bottom: 1px solid #e5e6eb;
}
.label{
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    text-align: right;
    color: #1d2129;
    width: 85px;
    flex: none;
    padding: 10px;
}
.footer{
    border-top: 1px solid #e5e6eb;
    height: 60px;
    justify-content: space-between;
    padding: 0 20px;
    text-align: right;
    line-height: 50px;
}
.btn{
  margin: 0 10px;
}
</style>
