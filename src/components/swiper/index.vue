
<template>
  <swiper 
    :modules="modules" 
    class="mySwiper" 
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2200,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
      pagination:true
    }"
  >
     <swiper-slide v-for="(item,index) in imgOptions" :key="index">
        <img :src="item.url" class="img"/>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide ,} from "swiper/vue";

import { Autoplay, Pagination } from "swiper";

import "swiper/css";

import "swiper/css/pagination";
import {defineComponent,ref} from 'vue';
import useImgs from "@/hooks/useImgs";
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const imgs = useImgs();
    const imgOptions =ref([
      {
        url:imgs.getAssetsFile('swiper1.jpeg'),
      },
      {
        url:imgs.getAssetsFile('swiper2.jpeg'),
      },
      {
        url:imgs.getAssetsFile('swiper3.jpeg'),
      }
    ]);
    return {
      imgOptions,
      modules: [Autoplay,Pagination],
    };
  },
});
</script>
<style lang="scss" scoped>
.swiper {
  width: 1020px;
  height: 280px;
  margin-top:3rem ;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>