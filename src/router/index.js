import { createRouter, createWebHistory } from 'vue-router'

const Home  = () => import( /* webpackChunkName: "home" */ '../views/Home.vue')
const About = () => import( /* webpackChunkName: "about" */ '../views/About.vue')
const Hdkhh = () => import( /* webpackChunkName: "hdkhh" */ '../views/Hdkhh.vue')

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/hdkhh',
		name: 'Hdkhh',
		component: Hdkhh
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router