<template>
  <div class="home">
      {{homeText}}
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

</style>
