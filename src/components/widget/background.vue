<template>
  <div class="background">
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
    top: 0;
    left: 0;
    background-color: #000;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url("https://cdn.jsdelivr.net/gh/Mu-Yan/Mu-Yan.github.io/blogsImg/17.jpg") center center / cover no-repeat
  }
</style>
