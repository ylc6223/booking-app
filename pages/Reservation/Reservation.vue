<template>
	<view class="container">
		<view class="caption">Hotel reservation</view>
		<view class="amount-container">
			<view class="daa1">
				<view>
					<text class="block">Balance</text>
					<text class="block">725.22</text>
				</view>
			</view>
			<view class="daa2">
				<view>
					<text class="block">Number of Task</text>
					<text class="block">13/60</text>
				</view>
			</view>
			<view>
				<navigator class="w-full" url="/"><image class="w-40p" src="/static/Reservation/imgs/10001.png" mode="widthFix"/></navigator>
			</view>
			<view class="daa3">
				<view>
					<text class="block">Undone Amount</text>
					<text class="block">0.00</text>
				</view>
			</view>
			<view class="daa4">
				<view>
					<text class="block">Commission</text>
					<text class="block">24.65</text>
				</view>
			</view>
			<view class="daa5">-</view>
		</view>
		<view class="booking-container">
			<view class="weather-container">
				<view style="width: 30%"><image class="w-60p" src="/static/Reservation/imgs/10002.png" mode="widthFix" /></view>
				<view>
					<view>
						<text class="block">Welcome to Booking</text>
						<text class="block">Experience the best service</text>
					</view>
				</view>
			</view>
			<image class="w-full" src="/static/Reservation/imgs/10003.png" mode="widthFix" />
			<button id="autoStart" class="start-btn">One-click booking</button>
		</view>
		<view class="card-container pb-100" style="padding-left: 10rpx;padding-right: 10rpx">
			<view class="caption-container">
				<view class="icon"></view>
				<view class="fw-700">Rules Description</view>
			</view>
			<view class="mui-card" style="margin-bottom: 0">
				<view class="mui-card-header mui-card-media" style="height: 40vw;">
          <image class="w-full" mode="widthFix" src="/static/Reservation/imgs/10009.png"></image>
        </view>
				<view class="mui-card-content">
					<view class="mui-card-content-inner" style="display: none">
						<text class="block">
							1. The Experience Gold is only good or available for 24 hours after register. If you are unable to use, it will be returned to the Hotel Companies
							immediately.
						</text>
						<text class="block">
							2. About submitting tasks, click 'Reservation' to go to the relevant page and 'One-click booking'. Wait for the system to submit the rating to complete
							the ratings. You can make withdrawals every day by completing the ratings, and the withdrawal time is within 1 hour!
						</text>
						<text class="block">3. All ratings are randomly issued by the system and cannot be changed, canceled , controlled or skipped, etc.</text>
						<text class="block">
							4. Each ratings from a different merchant, more than 10 minutes no deposit, you need to contact online customer service, so that the merchant to confirm
							the bank account to confirm whether the same.
						</text>
						<text class="block">5. The platform operating hours are 11:00am-11:00pm every day, users can submit ratings during the platform operating hours.</text>
						<text class="block">
							6. If the account is fraudulently used, please contact online customer service as soon as possible to deal with it, while the platform will take legal
							actions.
						</text>
						<text class="block">
							7. When you encounter a Premium hotel, please contact customer service about the deposit and click 'One-click booking' on the record page to proceed to
							complete the ratings.
						</text>
						<text class="block">
							8. &nbsp;Maximum withdrawal amount is 10,000SGD per times. If you withdraw more than 10,000SGD you will need to separate times to process.
						</text>
						<text class="block">(Note: For further clarification, please contact our online customer service)</text>
					</view>
				</view>
			</view>
		</view>
		<tui-tabbar :unlined="true" zIndex="8999"></tui-tabbar>
	</view>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
	data() {
		return {}
	},
	computed: {
		...mapState(['tabBarIndex', 'tabBar'])
	},
	onLoad() {
		uni.hideTabBar()
	},
	onShow() {},
	methods: {
		...mapMutations(['resetTabBarIndex'])
	}
}
</script>

<style lang="scss" scoped>
.caption {
	padding: 30rpx;
	text-align: center;
	font-size: 18px;
	width: 100%;
	background-color: #fff;
}
.amount-container {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 0 30rpx 20rpx 30rpx;
	background: #fff;
}
.amount-container > view {
	background: #233342;
	display: flex;
	justify-content: center;
	align-items: center;
	border-right: 1px solid #4a5362;
	border-bottom: 1px solid #4a5362;
	font-size: 12px;
	width: 33.3%;
	padding: 16rpx 0;
	color: #fff;
	text-align: center;
}
.w-40p{
  width: 40%;
}
.w-60p{
  width: 60%;
}
.booking-container {
  background: #fff;
  padding: 30rpx;
  padding-top: 0;
}
.booking-container .weather-container {
  padding: 30rpx;
  padding-bottom: 20rpx;
  background: #009cde;
  display: flex;
  justify-content: center;
}
.booking-container .weather-container view {
  font-weight: bold;
  color: #fff;
  font-size: 16px;
}
.start-btn {
  background: linear-gradient(to right, rgb(38, 222, 251), rgb(21, 176, 238)) !important;
  width: 100%;
  border: 0;
  padding: 10px;
  color: #fff;
  font-weight: bold;
}
.card-container {
  background: #ffffff;
  margin-top: 20rpx;
}
.caption-container {
  display: flex;
  justify-content: flex-start;
  padding: 20rpx;
  background: #ffffff;
}
.caption-container .icon {
  background: #0097dd;
  height: 34rpx;
  width: 10rpx;
  border-radius: 10px;
  margin-top: 4rpx;
  margin-right: 12rpx;
}
.mui-card {
  font-size: 14px;
  position: relative;
  overflow: hidden;
  margin: 20rpx;
  border-radius: 2px;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
  box-shadow: none;
}
</style>
