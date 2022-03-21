<template>
  <div id="admin">
      <Edit/>
  </div>
</template>

<script lang="ts">
import { defineComponent,watch,ref,onUpdated } from 'vue';
import E from 'wangeditor'
import router from '../app/router'
import Edit from '@/components/wangeditor/index.vue'
  export default defineComponent({
    name: 'Admin',
    components:{Edit},
    setup(props,ctx:any) {
        return {
           
        }
    }
  })
</script>

<style lang="scss" scoped>

</style>
