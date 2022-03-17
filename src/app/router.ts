
import {
	createRouter,
    createWebHistory
} from 'vue-router'
 import Home from '@/pages/home.vue';
const routes = [
	{
		path: '/for/home',
		component:Home,
		meta: {
			title: "何以为家",
			keepAlive: true
		}
	},
	{
		path: '/for/chance',
		component:Home,
		meta: {
			title: "上路是偶然",
			keepAlive: true
		}
	},
	{
		path: '/for/me',
		component:Home,
		meta: {
			title: "关于我",
			keepAlive: true
		}
	},
	{
		path: '/for/live',
		component:Home,
		meta: {
			title: "思考生活",
			keepAlive: true
		}
	}
]
 
const router = createRouter({
	routes,
    history:createWebHistory()
})
 
// router.beforeEach(async (to, from, next) => {
// 	if (to.meta.title) {
// 		document.title = to.meta.title;
// 	}
// 	next();
// });
 
export default router