<template>
  <div class="admin-pop">
      <div class="pop-title">发布文章</div>
      <div class="pop-block">
          <span class="label">分类:</span>
          <div class="content">
              <template v-for="(item,index) in classifyOpts" :key="index">
                  <span class="tag" @click="onClick(item)">{{item.label}}</span>
              </template>
          </div>
      </div>
      <div class="pop-block">
          <span class="label">文章封面:</span>
          <div class="content">
            <van-uploader v-model="file"></van-uploader>
            <div class="tip"></div>
          </div>
      </div>
      <div class="footer">
          <van-button class="btn" type="default" @click="cancel">取消</van-button>
          <van-button class="btn" type="primary" @click="submit">发布</van-button>
      </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent,ref } from 'vue'
  export default defineComponent({
    name: 'AdminPop',
    setup(props,ctx:any) {
      const classifyOpts =ref([
        {
          label:'何以为家',
          value:1
        },
        {
          label:'上路是偶然',
          value:2
        },
        {
          label:'关于我',
          value:3
        },
        {
          label:'思考生活',
          value:4
        },
      ]);
      const popupValue:any =ref({});
      const file:any =ref();
      const classify =ref();
      const submit =()=>{
        console.log(ctx)
        ctx.emit('onSubmit',{
          file:file.value,
          classify:classify.value
        })
      }
      const cancel=()=>{
         ctx.emit('onCancel');
      }
      const onClick=(item:any)=>{
        classify.value =item;
      }
      return{
        classifyOpts,
        submit,
        cancel,
        onClick,
        popupValue,
        file
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
.tag{
  color: #1d2129;
  font-size: 14px;
  margin: 10px;
  cursor: pointer;
}
.pop-block{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
