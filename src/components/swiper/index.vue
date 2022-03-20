
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
    <swiper-slide>
        <!-- <img src="https://images.unsplash.com/photo-1640092593995-54d71076b961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" class="img"/> -->
    </swiper-slide>
    <swiper-slide>
      2333
        <!-- <img src="https://images.unsplash.com/photo-1640092593995-54d71076b961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"  class="img"/> -->
    </swiper-slide>
    <swiper-slide>
      3333
        <!-- <img src="https://images.unsplash.com/photo-1640092593995-54d71076b961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"  class="img"/> -->
    </swiper-slide>
   
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import { Autoplay, Pagination } from "swiper";

import "swiper/css";

import "swiper/css/pagination";


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay,Pagination],
    };
  },
};
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