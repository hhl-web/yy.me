<template>
  <div class="background">
    <div class="image"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Background',
    setup() {
      
    }
  })
</script>

<style lang="scss" scoped>
  @import 'src/styles/init.scss';

  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #0e0e0e;
    z-index: -1;
    .image {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.3;
      background:  url('@/assets/imgs/background.jpg');
    }
  }
</style>
