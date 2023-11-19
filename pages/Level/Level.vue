<template>
	<view class="">
		<view class="container">
			<view class="top"></view>
			<view class="panel-container">
				<view class="content">
                    
					<image class="vip" mode="widthFix" src="/static/Home/imgs/10001.png"/>
						<view calss="imgstyle text-right">
							<text class="w-full text-white text-sm">Member Introduction</text>
							<image style="width: 5%;" src="/static/Home/imgs/10002.png" mode="widthFix" />
						</view>
						<view class="cur-container">
							<image class="cur-vip" src="/static/Home/imgs/10003.png" mode="widthFix" />
							Current 4
						</view>
				</view>
			</view>

			<view class="intro">
				<text class="block fw-700">Introduction</text>
				<view>
					A staff member's daily income is determined by the inviewidual account balance. The higher the
					account balance, the higher the price of rated reviews that can be matched. Therefore, the higher
					the commission ratio per rating review.<br> In order to ensure the authenticity of the data, a
					deposit is required to help optimize the data and return it quickly after the rating review is
					completed. In order to attract more guests, the hotel side needs better booking data. Therefore,
					this review will Generate virtual reservations that can be converted into consumption data.
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
		margin: 0 auto;
		height: 100vh;
	}

	.top {
		background-color: #0b4746;
		min-height: 80px;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
	}

	.panel-container {
		position: absolute;
		background: url('/static/Home/imgs/10004.png');
		background-size: 100%;
		height: 155px;
		top: 50px;
		width: 90%;
		left: 5%;
	}

	.panel-container .content {
		position: relative;
	}

	.imgstyle {
		text-align: right;
		color: #fff;
		font-size: 12px;
	}

	.panel-container .content .cur-container {
		position: absolute;
		left: 20px;
		top: 40px;
		color: #a66b42;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
    .panel-container .content image.vip {
        position: absolute;
		width: 30%;
        left: 35%;
        top: 60rpx;
    }
	.panel-container .content .cur-container image.cur-vip {
		width: 20px;
		margin-right: 5px;
	}
</style>