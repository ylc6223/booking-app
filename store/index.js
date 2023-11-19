import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		tabBar: [{
				pagePath: 'pages/Home/Home',
				text: 'Home',
				iconPath: '/static/icons/10013.png',
				selectedIconPath: '/static/icons/10013.png',
				num: 0, //角标数值
				hump: false, //是否为凸起图标
				isDot: false, // 角标是否为圆点
				verify: true //是否需要先验证 (如登录)
			},
			{
				pagePath: 'pages/Information/Information',
				text: 'Information',
				iconPath: '/static/icons/10014.png',
				selectedIconPath: '/static/icons/10014.png',
				num: 0, //角标数值
				hump: false, //是否为凸起图标
				isDot: false, // 角标是否为圆点
				verify: true //是否需要先验证 (如登录)
			},
			{
				pagePath: 'pages/Reservation/Reservation',
				text: 'Reservation',
				iconPath: '/static/icons/10015.png',
				selectedIconPath: '/static/icons/10015.png',
				num: 0, //角标数值
				hump: true, //是否为凸起图标
				isDot: false, // 角标是否为圆点
				verify: true //是否需要先验证 (如登录)
			},
			{
				pagePath: 'pages/Order/Order',
				text: 'Order',
				iconPath: '/static/icons/10016.png',
				selectedIconPath: '/static/icons/10016.png',
				num: 0, //角标数值
				hump: false, //是否为凸起图标
				isDot: false, // 角标是否为圆点
				verify: true //是否需要先验证 (如登录)
			},
			{
				pagePath: 'pages/User/User',
				text: 'User',
				iconPath: '/static/icons/10017.png',
				selectedIconPath: '/static/icons/10017.png',
				num: 0, //角标数值
				hump: false, //是否为凸起图标
				isDot: false, // 角标是否为圆点
				verify: true //是否需要先验证 (如登录)
			},
		],
		tabBarIndex: 0, //当前选中第几项,
	},
	mutations: {
		changeTabBar(state, payload) {
			if (payload) {
				const tabBarIndex = typeof payload.index == 'number' ? payload.index : payload
				state.tabBarIndex = tabBarIndex
			}
		},
		resetTabBarIndex(state, payload) {
			state.tabBarIndex = 0
		}
	}
})

export default store