<template>
	<view class="container">
		<tui-navigation-bar transparent :splitLine="false" @init="initNavigation" :scrollTop="scrollTop" title=""
			backgroundColor="#ffffff00" color="#333">
			<!-- #ifdef H5 -->
			<!-- #endif -->
		</tui-navigation-bar>
		<!-- 轮播图部分 -->
		<view class="tui-header-bg relative">
				<view class="lang-btn">
					<image src="/static/icons/10001.png" @click="navTo"></image>
				</view>
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item class="sw-item" v-for="(item,idx) in banners" :key="item">
					<image :src="item" class="tui-header-img"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 四个图标部分 -->
		<view class="nav-container">
			<view class="top"></view>
			<view class="main">
				<navigator class="nav-item" :url="item.url" v-for="(item,idx) in navs" :key="idx">
					<view class="flex flex-col justify-center items-center">
						<image :src="item.imgUrl" mode="widthFix"></image>
						<view class="w-full mb-20">
							<text class="block">
								{{item.text}}
							</text>
							<text class="block">
								{{item.text2}}
							</text>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		<view class="logo-container">
			<view class="title">
				<image src="/static/Home/imgs/10011.png" class="w-full" mode="widthFix"></image>
			</view>
			<view class="content">
				<image src="/static/Home/imgs/10012.png" class="w-full" mode="widthFix"></image>
			</view>
		</view>
		<view class="card-container">
			<view class="caption-container">
				<view class="icon"></view>
				<view>About more</view>
			</view>
			<view class="mui-card-header mui-card-media">
				<image class="w-full h-40vw" src="/static/Home/imgs/10019.jpg" mode="aspectFill"></image>
				<view class="mui-card-content-inner">
					<view class="text-black text-sm mb-20">
						We have internationalized service standards from a Tripadvisor perspective,
						a common goal of Customer
						Service experience and a beautiful experience of realizing customer self-worth
					</view>
				</view>
			</view>
		</view>
		<view class="card-container pb-100">
			<view class="caption-container">
				<view class="icon"></view>
				<view>Service Scope</view>
			</view>
			<view class="mui-card-header mui-card-media">
				<image class="w-full h-40vw" src="/static/Home/imgs/10020.jpg" mode="aspectFill"></image>
				<view class="mui-card-content-inner">
					<view class="text-black text-sm mb-20">
						Currently serving 100,000+ customers and receiving good reviews
					</view>
				</view>
			</view>
		</view>
		<!-- 弹窗页面 -->
		<!-- 		<tui-modal :show="true" title="提示" content="确定退出登录吗？"></tui-modal> -->
		<tui-tabbar :unlined="true" zIndex="8999"></tui-tabbar>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				banners: ['/static/Home/banners/10002.jpg', '/static/Home/banners/10003.jpg',
					'/static/Home/banners/10004.jpg',
					'/static/Home/banners/10005.jpg', '/static/Home/banners/10006.jpg',
				],
				navs: [{
						text: "",
						text2: "Level",
						url: "/pages/Level/Level",
						imgUrl: "/static/icons/10007.png"
					},
					{
						text: "Announcement",
						text2: "",
						url: "",
						imgUrl: "/static/icons/10008.png"
					},
					{
						text: "Help",
						text2: "",
						url: "",
						imgUrl: "/static/icons/10009.png"
					},
					{
						text: "",
						text2: "Service",
						url: "",
						imgUrl: "/static/icons/10010.png"
					},
				],
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				top: 0, //标题图标距离顶部距离
				scrollTop: 0.5,
				modal: true
			}
		},
		computed: {
			...mapState(['tabBarIndex', 'tabBar']),
		},
		onLoad() {
			uni.hideTabBar()
		},
		onShow() {
			this.resetTabBarIndex()
		},
		methods: {
			...mapMutations(['resetTabBarIndex']),
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			initNavigation(e) {
				this.opacity = e.opacity;
				this.top = e.top;
			},
			back() {
				uni.navigateBack();
			},
			tabbarSwitch(e) {
				//获取登录状态，此处默认未登录
				//跳转切换逻辑需自行实现
				let isLogin = false;
				if (e.verify && !isLogin) {
					this.tui.toast('您还未登录，请先登录');
				} else {
					this.current = e.index;
				}
			},
			//弹窗组件  调用此方法显示组件
			showModal() {
				this.modal = true;
			},
			//隐藏组件
			hideModal() {
				this.modal = false;
			},
			handleClick(e) {
				let index = e.index;
				if (index === 0) {
					this.tui.toast('你点击了取消按钮');
				} else {
					this.tui.toast('你点击了确定按钮');
				}
				this.hideModal()
			},
			// 语言页面跳转
			navTo() {
				uni.navigateTo({
					url: "/pages/language/language"
				})
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;

		},
	}
</script>

<style lang="scss" scoped>
	.container {
		position: relative;
	}

	.tui-header-bg {
		width: 100%;
		margin: 0;
	}

	.lang-btn {
		position: absolute;
		right: 3%;
		top: 3%;
		z-index: 2000;
	}

	.lang-btn image {
		width: 64rpx;
		height: 64rpx;
		border: 0;
	}

	.minh-270,
	swiper {
		min-height: 270px;
	}

	.sw-item {
		width: 100%;
		height: 100%;
		display: block;
	}

	.tui-header-img {
		width: 100%;
		height: 100%;
	}

	.nav-container {
		background: #ffffff;
		width: 100%;
		position: relative;
	}

	.nav-container .top {
		background: #ffffff;
		height: 40rpx;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		position: absolute;
		top: -20px;
		left: 0;
		z-index: 101;
		width: 100%;
	}

	.nav-container .main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.nav-item {
			text-align: center;
			font-size: 12px;
			color: #333;
			flex: 1;

			image {
				width: 55%;
				min-width: 52px;
				min-height: 52px;
			}
		}
	}

	.logo-container {
		margin-top: 20rpx;
		background: #ffffff;
	}

	.logo-container .title {
		padding: 40rpx;
	}

	.logo-container .content {
		padding: 40rpx;
		padding-top: 0;
	}

	.card-container {
		background: #ffffff;
		margin-top: 10px;
		text-align: left;
	}

	.card-container .caption-container {
		display: flex;
		justify-content: flex-start;
		padding: 10px;
		background: #ffffff;
	}

	.caption-container .icon {
		background: #0097dd;
		height: 17px;
		width: 5px;
		border-radius: 10px;
		margin-top: 2px;
		margin-right: 6px;
	}

	.mui-card-header {
		font-size: 17px;
		border-radius: 2px 2px 0 0;
	}

	.mui-card-media {
		vertical-align: bottom;
		color: #fff;
		background-position: center;
		background-size: cover;
	}

	.mui-card-header.mui-card-media {
		display: block;
		padding: 10rpx;
	}

	.mui-card-content-inner {
		position: relative;
		padding: 30rpx;
	}

	.h-40vw {
		height: 40vw;
	}

	.text-black {
		font-size: 12px;
		color: #333
	}

	.mb-20 {
		margin-bottom: 20rpx;
	}
</style>