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
.background{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: $body-bg;
    width: 100%;
    height: 100%;
}
</style>
