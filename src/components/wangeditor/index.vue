<template>
    <div id="edit"></div>
</template>

<script lang="ts">
import { defineComponent,watch,ref,onMounted } from 'vue';
import E from 'wangeditor';

export default defineComponent({
    name: 'Edit',
    setup(props,ctx:any) {
        const content =ref('')
        onMounted(()=>{
            const editor = new E(document.getElementById('edit'));
            editor.config.height = 500
            editor.create();
            editor.config.onchange =  (newHtml:any)=> {
                console.log("change 之后最新的 html", newHtml);
                content.value=newHtml;
                console.log(ctx,'---ctx')
                ctx.emit('onEdit',newHtml)
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
