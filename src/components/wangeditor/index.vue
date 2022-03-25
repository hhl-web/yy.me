<template>
    <div id="edit"></div>
</template>

<script lang="ts">
import { defineComponent,watch,ref,onMounted } from 'vue';
import E from 'wangeditor';

export default defineComponent({
    name: 'Admin',
    setup(props,ctx:any) {
        const content =ref('')
        onMounted(()=>{
            const editor = new E(document.getElementById('edit'));
            editor.config.height = 500
            editor.create();
            editor.config.onchange = function (newHtml:any) {
                console.log("change 之后最新的 html", newHtml);
                content.value=newHtml;
            };
        })
        return {
           content
        }
    }
  })
</script>

<style lang="scss" scoped>
// #edit{
//     height: 500px;
//     width: 100%;
// }

</style>
