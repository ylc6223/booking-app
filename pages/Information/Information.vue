<template>
	<view class="container">
		<!-- 轮播图部分-->
		<view class="tui-header-bg">
			<swiper
				class="swiper"
				circular
				:indicator-dots="indicatorDots"
				:autoplay="autoplay"
				:interval="interval"
				:duration="duration"
				:indicator-color="indicatorColor"
				:indicator-active-color="indicatorActiveColor"
			>
				<swiper-item class="sw-item" v-for="(item, idx) in banners" :key="idx">
					<image :src="item" class="tui-header-img"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- poplur hotels部分 -->
		<view class="popular-container">
			<view class="title-container">
				<view class="bar"></view>
				<view class="fw-700">Polular Hotels</view>
				<view class="bar"></view>
			</view>
			<view class="content-container">
				<view>
					<navigator class="w-full">
						<image src="/static/Information/imgs/10004.png" class="w-full" mode="widthFix"></image>
					</navigator>
				</view>
				<view>
					<navigator class="w-full">
						<image src="/static/Information/imgs/10005.png" class="w-full" mode="widthFix"></image>
					</navigator>
				</view>
				<view>
					<navigator class="w-full">
						<image src="/static/Information/imgs/10006.png" class="w-full" mode="widthFix"></image>
					</navigator>
				</view>
				<view>
					<navigator>
						<image src="/static/Information/imgs/10007.png" class="w-full" mode="widthFix"></image>
					</navigator>
				</view>
				<view>
					<navigator class="w-full">
						<image src="/static/Information/imgs/10008.png" class="w-full" mode="widthFix"></image>
					</navigator>
				</view>
				<view>
					<navigator class="w-full">
						<image src="/static/Information/imgs/10009.png" class="w-full" mode="widthFix"></image>
					</navigator>
				</view>
			</view>
		</view>
		<!-- featured hotel部门 -->
		<view class="caption-container">
			<view class="icon"></view>
			<view class="fw-700">Featured Hotels</view>
			<view style="padding-left: 20rpx">Check-in assembly order</view>
		</view>
		<view class="photo-container">
			<view style="width: 49.5%">
				<navigator url="/">
					<image class="w-full" src="/static/Information/imgs/10010.png" mode="widthFix" />
				</navigator>
			</view>
			<view style="width: 49.5%">
				<navigator url="/">
					<image class="w-full" src="/static/Information/imgs/10011.png" mode="widthFix" />
				</navigator>
				<navigator url="/">
					<image class="w-full" src="/static/Information/imgs/10012.png" mode="widthFix" />
				</navigator>
			</view>
		</view>
		<view class="caption-container">
			<view class="icon"></view>
			<view class="fw-700">More hotels</view>
			<div style="padding-left: 20rpx">More options</div>
		</view>
    <view class="photo-container">
      <view style="width: 49.5%;">
        <navigator href="/index.php?com=sign8tag-front-index&amp;tpl=hoteldetails&amp;id=205"><image class="w-full" src="/static/Information/imgs/10013.png" mode="widthFix"/></navigator>
      </view>

      <view style="width: 49.5%;">
        <navigator href="/index.php?com=sign8tag-front-index&amp;tpl=hoteldetails&amp;id=206"><image class="w-full" src="/static/Information/imgs/10014.png" mode="widthFix"/></navigator>

        <navigator href="/index.php?com=sign8tag-front-index&amp;tpl=hoteldetails&amp;id=207"><image class="w-full" src="/static/Information/imgs/10015.png" mode="widthFix"/></navigator>
      </view>
    </view>
    <view class="pb-100"></view>
			<tui-tabbar :unlined="true" zIndex="8999"></tui-tabbar>
	</view>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
	data() {
		return {
			banners: ['/static/Information/banners/10001.jpg', '/static/Information/banners/10002.jpg', '/static/Information/banners/10003.jpg'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			indicatorColor: 'rgba(255,255,255)',
			indicatorActiveColor: '#aaa'
			// background: ['#aaa', '#aaa', '#aaa'],
			// indicatorDots: true,
			// autoplay: true,
			// interval: 2000,
			// duration: 500
		}
	},
	computed: {
		...mapState(['tabBarIndex', 'tabBar'])
	},
	onLoad() {
		uni.hideTabBar()
	},
	onShow() {},
	methods: {
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
			this.opacity = e.opacity
			this.top = e.top
		}
	}
}
</script>

<style lang="scss" scoped>
.tui-header-bg {
	width: 100%;
	height: 400rpx;
	padding: 0;
	margin: 0;
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

// .uni-margin-wrap {
// 	width: 100%;
//        height: 600rpx;
// }

.swiper {
	width: 100%;
	height: 100%;
}

.popular-container .title-container {
	display: flex;
	justify-content: center;
	padding: 20rpx 0 0 0;
	align-items: center;
	background: #ffffff;
}

.popular-container .title-container .bar {
	background: #0097dd;
	width: 34rpx;
	height: 8rpx;
	border-radius: 5px;
	margin: 0 20rpx;
}

.popular-container .content-container {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	background: #ffffff;
	padding: 30rpx;
	align-items: center;
	min-height: 320rpx;
	padding-top: 0;
}
.popular-container .content-container > view {
	width: 33%;
}

.caption-container {
	display: flex;
	justify-content: flex-start;
	padding: 20rpx;
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
.photo-container {
	display: flex;
	justify-content: space-between;
	background: #ffffff;
	padding: 30rpx;
	padding-top: 0;
}
.fw-700{
	color:#043168
}
</style>
