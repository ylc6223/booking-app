<template>
	<view>
		<view class="container">
			<view class="mui-bar mui-bar-transparent">
				<view class="mui-title">Hotel Details</view>
			</view>

			<view>
				<image class="w-100" src="/static/Information/imgs/10004.png" mode="widthFix">
			</view>


			<view class="content-container">
				<view class="content">
					<view class="article">The visiting club is a Tripadvisor representative of
						brand-to-brand collaboration, the head of the company has been rewarded for a charitable
						campaign and has received 3 employees and staff. More, by reaching more than 90 ways,
						immediately For 4,000,000 homes to enjoy the privileged privileges and share the privileged
						privileges with loved ones, the guest members can receive the privileges by using the hotel
						privileges of the concierge award four times, which is the best privilege. Room (including
						the most luxurious suite) stay experience : Premium Room Rewards, Room Upgrade Rewards
						Points and Monetary Rewards, and Standard Room Rewards, in addition, Honors members can use
						their points to purchase unique experience awards, merchandise and vacation packages, or
						make charitable donations.
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		margin: 0 auto;
		height: 100vh;
	}

	.mui-bar-transparent {
		top: 0;
		background-color: rgba(247, 247, 247, 0);
		-webkit-box-shadow: none;
		box-shadow: none;
	}

	.mui-bar {
		position: fixed;
		z-index: 10;
		right: 0;
		left: 0;
		height: 44px;
		padding-right: 10px;
		padding-left: 10px;
		border-bottom: 0;
		backface-visibility: hidden;
	}

	.mui-title {
		font-size: 17px;
		font-weight: 500;
		line-height: 44px;
		position: absolute;
		color: #fff;
		padding: 0;
		text-align: center;
		white-space: nowrap;
		left: 80rpx;
		right: 80rpx;
	}


	.w-100 {
		width: 100%;
	}

	.content-container {
		background: #ffffff;
		position: relative;
	}

	.content-container .content {
		position: absolute;
		top: -60px;
		background: #ffffff;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		color: grey;
		width: 95%;
		left: 2.5%;
		padding: 15px;
		line-height: 1.5;
		font-size: 28rpx;
	}
</style>