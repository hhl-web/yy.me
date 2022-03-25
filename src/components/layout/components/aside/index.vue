<template>
    <div class="layout-aside">
        <div shadow="always">
           <van-field placeholder="所见与所闻" class="aside-ipt" >
                <template #append>
                    <van-button :icon="Search" ></van-button>
                </template>
            </van-field>
        </div>
        <div>
            社会火的新闻
        </div>
        <div>
           广告
        </div>
        <div>
           日期
        </div>
        <div>
           广告
        </div>
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
.a-card{
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