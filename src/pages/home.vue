<template>
  <div class="home">
    <div class="home-list">
          <img src="@/assets/imgs/back.jpeg"/>
          <div class="list-item">
            <div class="list-container">
              <span class="title">{{homeText}}</span>
              <p class="info">1111</p>
              <div class="footer">
                <span>点赞</span>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,watch,ref } from 'vue';
import { useRoute } from 'vue-router'

  export default defineComponent({
    name: 'Home',
    setup(props,ctx) {
        const route = useRoute();
        const homeText:any= ref('')
        watch(
            ()=> [route.fullPath,route.meta],
            ([newPath,newMeta]:any) => {
                homeText.value =newMeta.title;
                console.log('监听路由',newPath,newMeta)
            },{
                immediate:true
            }
        )
        return {
            homeText
        }
    }
  })
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: 500;
}
.home-list{
    width:40rem;
    height: 6rem;
    background-color:#2d2d2d ;
    border-radius: 5px;
    border-color:#2d2d2d ;
  }
img{
  width: 110px;
  height: 75px;
  float: left;
  margin: 0.6rem;
}
.list-container{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.title{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 0.618rem;
    font-weight: 700;
}
.info{

}
.footer{
    height: 2em;
    line-height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    overflow: hidden;
    font-size: 12.432px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
}
</style>
