<template>
    <div class="layout-aside">
        <el-card shadow="always">
           <el-input placeholder="所见与所闻" class="aside-ipt" >
                <template #append>
                    <el-button :icon="Search" />
                </template>
            </el-input>
        </el-card>
        <el-card>
            社会火的新闻
        </el-card>
        <el-card>
           广告
        </el-card>
        <el-card>
           日期
        </el-card>
        <el-card>
           广告
        </el-card>
    </div>
</template> 
 
 <script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'Aside',
    props: {},
    setup() {}
});
</script> 
 
<style scoped lang="scss">
.layout-aside{
   width: 250px;
   display: flex;
   flex-direction: column;
   height: auto;
    color: #2d2d2d;
}
.el-card{
    margin: 10px 0;
    background-color:  rgba(68, 68, 68, .6);
    color: #b9babc;
    font-weight: 500;
    border-color:rgba(68, 68, 68, .6);
}
.aside-ipt{
    font-weight: 500;
    background-color: #2d2d2d;
}
input{
    background-color:#2d2d2d;
}
</style> 