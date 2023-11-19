<template>
	<view>
		<view class="mt-2">
			<uni-list>
				<uni-list-item showArrow>
					<template #body>
						<view class="flex" @click="checkinLang">
							<image class="flag block shrink-0 text-lg mr-20" src="/static/icons/gb.svg"></image>
							<view class="">
								<view class="">English</view>
								<view class="mui-ellipsis">Click to switch language</view>
							</view>
						</view>
					</template>
				</uni-list-item>
				<uni-list-item showArrow>
					<template #body>
						<view class="flex" @click="checkinLang">
							<image class="flag block shrink-0 text-lg mr-20" src="/static/icons/hk.svg"></image>
							<view class="">
								<view class="">繁体</view>
								<view class="mui-ellipsis">Click to switch language</view>
							</view>
						</view>
					</template>
				</uni-list-item>
			</uni-list>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			checkinLang() {
				console.log('click');
				// 语言页面跳转
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mr-20 {
		margin-right: 20rpx;
	}

	.mt-2 {
		margin-top: 16rpx;
	}

	.flag {
		width: 81rpx;
		height: 81rpx;
		border-radius: 50%;
	}

	.white-space {
		background-color: #c8c7cc;

	}

	.mui-ellipsis {
		font-size: 12px;
		margin-top: 0;
		color: #8f8f94;
	}
</style>