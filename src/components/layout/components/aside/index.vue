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
@use 'sass:math';
@import 'src/styles/init.scss';
.layout-aside{
    width: 250px;
    display: flex;
    flex-direction: column;
    height: auto;
    color: #CCFFB6;
    margin-right:10px;
}
.el-card{
    margin: 10px 0;
    background-color:  $module-bg;
    color: #CCFFB6;;
    font-weight: 500;

}
.aside-ipt{
    font-weight: 500;
    background-color: $module-bg;
}
input{
    background-color:$module-bg;
}
</style> 