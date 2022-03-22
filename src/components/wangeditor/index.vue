<template>
    <div id="edit"></div>
</template>

<script lang="ts">
import { defineComponent,watch,ref,onMounted } from 'vue';
import E from 'wangeditor';

export default defineComponent({
    name: 'Admin',
    setup(props,ctx:any) {
        onMounted(()=>{
            const editor = new E(document.getElementById('edit'));
            editor.config.height = 500
            editor.create()
        })
        return {
           
        }
    }
  })
</script>

<style lang="scss" scoped>
#edit{
    height: 300px;
    width: 100%;
}

</style>
