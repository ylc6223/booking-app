<template>
	<view class="container">
    <view class="toppic-container">
      <image class="w-full absolute left-0 right-0 top-0 bottom-0" mode="widthFix" src="/static/Order/imgs/10012.png"></image>
      <view class="t1">Scheduled record</view>
      <view class="t2">View your booking history</view>
    </view>
    <view id="aaiiidddd" class="navbar-container">
      <view class="active">All</view>
      <view href="">Pending</view>
      <view href="">Completed</view>
    </view>
    <view class="record-container" v-for="item in 10" :key="item">
      <view class="title-container">
        <view class="fw-700">Hotel Skeppsholmen, Stockholm, a Member of Design Hotels</view>
        <view class="status-2 status">Pending</view>
      </view>
      <view class="col-container">
        <view class="col photo"><image class="w-full" mode="widthFix" src="https://booking-digital.com/attachment/upload/ueditor/8/image/20230608/1686216025618.jpg"/></view>
        <view class="col" style="text-align: right; width: 29%;">
          <view>Order number:</view>
          <view>Scheduled time:</view>
          <view>Book Amount:</view>
          <view>Commissions:</view>
        </view>
        <view class="col" style="width: 33%;">
          <view>17001204052869418790</view>
          <view>2023-11-16 08:40:05</view>
          <view>$ 509.00</view>
          <view>$ 5.09</view>
        </view>
      </view>
      <view class="star-container" id="ssidstar418790">
        <view>Evalution: </view>
        <view class="flex items-center">
          <image mode="widthFix" src="https://booking-digital.com/template/sign8tag/front/nimages/start_1.png"/>
          <image mode="widthFix" src="https://booking-digital.com/template/sign8tag/front/nimages/start_1.png"/>
          <image mode="widthFix" src="https://booking-digital.com/template/sign8tag/front/nimages/start_1.png"/>
          <image mode="widthFix" src="https://booking-digital.com/template/sign8tag/front/nimages/start_2.png"/>
          <image mode="widthFix" src="https://booking-digital.com/template/sign8tag/front/nimages/start_2.png"/>
        </view>
      </view>
      <view class="submit-container">
        <button class="mui-btn mui-btn-blue">Confirm reservation</button>
      </view>
    </view>
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

			};
		},
		computed: {
			...mapState(['tabBarIndex', 'tabBar']),
		},
		onLoad() {
			uni.hideTabBar()
		},
		onShow() {
		},
		methods: {
			...mapMutations(['resetTabBarIndex']),
		}
	}
</script>

<style lang="scss" scoped>
.toppic-container {
  width: 100%;
  height: 420rpx;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
}
.toppic-container>view {
  color: #fff;
  position: absolute;
  left: 40rpx;
}
.toppic-container view.t1 {
  top: 72%;
  font-weight: bold;
  font-size: 20px;
}
.toppic-container view.t2 {
  top: 84%;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  padding: 30rpx 20rpx;
}
.navbar-container view.active {
  background: rgb(0, 156, 222);
  color: rgb(255, 255, 255);
  font-size: 13px;
}
.navbar-container view {
  background: #e7e7e7;
  color: #91918f;
  font-size: 13px;
  border-radius: 5px;
  width: 25%;
  padding: 6rpx;
  text-align: center;
}
.record-container {
  background: #fff;
  min-height: 200rpx;
  border-radius: 5px;
  margin: 20rpx;
  margin-top: 0;
}
.record-container .title-container {
  display: flex;
  justify-content: space-between;
  padding: 20rpx;
  font-size: 14px;
}
.status {
  font-size: 12px;
  width: 120rpx;
  text-align: center;
  padding: 6rpx 10rpx;
  height: 60rpx;
}
.status-2 {
  border: 1px solid #333333;
  color: #333333;
}
.record-container .col-container {
  display: flex;
  justify-content: space-between;
  padding: 20rpx;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.col-container view.col {
  width: 31%;
  font-size: 12px;
}
.col-container view.photo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.star-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30rpx;
  color: #333333;
  font-size: 12px;
}
.star-container image {
  //width: 6%;
  width: 40rpx;
  margin: 10rpx;
}
.submit-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30rpx;
  padding-top: 0;
}
.submit-container button {
  color: #FFF;
  background: rgb(39, 95, 118) !important;
  border: 0;
  width: 100%;
  padding: 20rpx;
  border-radius: 10px;
  font-weight: bold;
}
</style>