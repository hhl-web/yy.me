
import {
	createRouter,
    createWebHistory
} from 'vue-router'
 
const routes = [{
		path: '/',
		name: 'Home',
		meta: {
			title: "主页",
			keepAlive: true
		}
	},
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	component: '',
	// 	meta: {
	// 		title: '测试',
	// 		keepAlive: false
	// 	}
	// }
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