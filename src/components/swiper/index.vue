
<template>
  <swiper 
    :navigation="true" 
    :modules="modules" 
    class="mySwiper" 
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2300,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
  >
    <swiper-slide>
        <img src="https://images.unsplash.com/photo-1640092593995-54d71076b961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" class="img"/>
    </swiper-slide>
    <swiper-slide>
        <img src="https://images.unsplash.com/photo-1640092593995-54d71076b961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"  class="img"/>
    </swiper-slide>
    <swiper-slide>
        <img src="https://images.unsplash.com/photo-1640092593995-54d71076b961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"  class="img"/>
    </swiper-slide>
    <swiper-slide>
       <img src="https://images.unsplash.com/photo-1640092593995-54d71076b961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"  class="img"/>
    </swiper-slide>
    <swiper-slide>
       <img src="https://images.unsplash.com/photo-1640092593995-54d71076b961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"  class="img"/>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";

import "swiper/css/navigation";



export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation,Autoplay,Pagination],
    };
  },
};
</script>
<style lang="scss" scoped>
.img{
  height: 210px;
  width: 100%;
}
</style>