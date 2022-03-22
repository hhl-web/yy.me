<template>
  <div class="home">
    <div class="home-list">
          <img :src="getAssetsFile('back.jpeg')"/>
          <div class="list-item">
            <div class="list-container">
              <span class="title">{{meta.title}}</span>
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
import useImgs from "@/hooks/useImgs";
import {useRouter,MetaProps} from '@/hooks/useRouter'
  export default defineComponent({
    name: 'Home',
    setup(props,ctx) {
        const {route,meta}=useRouter()
        const imgs = useImgs();
        const getAssetsFile =imgs.getAssetsFile;
        return {
            getAssetsFile,
            meta
        }
    }
  })
</script>

<style lang="scss" scoped>
@use 'sass:math';
@import 'src/styles/init.scss';
.home{
  display: flex;
  flex-direction: column;
  font-weight: 500;
}
.home-list{
    width:35rem;
    height: 7rem;
    background-color:$module-bg;
    border-radius: 5px;
    border-color:$module-bg;
    box-shadow: 0 0 10px #ccc
  }
img{
  width: 110px;
  height: 95px;
  float: left;
  margin: 0.5rem 0.8rem 0.8rem 0.5rem;
}
.list-container{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 6.5rem;
}
.title{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 0.618rem;
    font-weight: 800;
    color: $color-module-text;
}
.info{
   color: $color-module;
}
.footer{
    height: 2em;
    line-height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    overflow: hidden;
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
}
</style>
