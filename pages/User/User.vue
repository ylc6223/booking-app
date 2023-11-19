<template>
    <view class="container">
        <view class="head-container">
            <view class="caption">User</view>
        </view>
        <view class="placeholder-block">
            <view class="profile-container">
                <view class="photo-container">
                    <view style="width: 25%">
                        <image class="head w-75p" mode="widthFix" src="/static/User/10001.png" />
                    </view>

                    <view style="width: 38%">
                        <view class="name fw-700">celiaaaa&nbsp;&gt;</view>
                        <view class="invite-contaier">
                            <view>Invite Code: 6f863</view>
                            <image class="cp" src="https://booking-digital.com/template/sign8tag/front/nimages/copy_icon.png" />
                        </view>
                        <input
                            name=""
                            id="webcopyinput"
                            type="text"
                            style="color: #ff0000; font-size: 20px; width: 1px; height: 1px; border: hidden; font-weight: bold; text-align: center"
                            value=""
                        />
                    </view>
                </view>
                <view class="nav-container">
                    <image class="imgstyle shrink-0" mode="widthFix" src="https://booking-digital.com/template/sign8tag/front/nimages/recharge.png" />
                    <view style="margin-right: 20%">
                        <navigator url="/">Depost</navigator>
                    </view>
                    <image class="imgstyle shrink-0" mode="widthFix" src="https://booking-digital.com/template/sign8tag/front/nimages/withdraw.png" />
                    <view style="margin-right: 20%">
                        <navigator url="">Withdrawal</navigator>
                    </view>
                </view>
            </view>
        </view>

        <!-- 中间gif动图部分 -->
        <view class="level-container">
            <image src="/static/User/VIP.gif" class="vip" mode="widthFix"></image>
            <view>
                <view class="t1">Your current levelLevel 4</view>
                <view class="t2 v2">Membership class gets more privileges</view>
            </view>
            <view>
                <button type="button" class="mui-btn mui-btn-blue">Check</button>
            </view>
        </view>
        <!-- common functions部分 -->
        <view class="fun-container">
            <view class="title">Common functions</view>
            <view class="icon-col">
              <block v-for="(item,idx) in links" :key="idx">
                <navigator :url="item.href">
                  <view class="text-center">
                    <image :src="item.imgUrl" mode="aspectFill" />
                    <view>{{item.text}}</view>
                  </view>
                </navigator>
              </block>
            </view>
        </view>

        <view class="menu-container" style="margin-bottom: 100px">
            <uni-list>
                <block v-for="(item, idx) in menus" :key="idx">
                    <uni-list-item showArrow :title="item.text" clickable @click="item.callback"></uni-list-item>
                </block>
            </uni-list>
        </view>
        <view class="pb-50"></view>
        <tui-tabbar :unlined="true" zIndex="8999"></tui-tabbar>
    </view>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            links:[
              {
                text: 'Member Level',
                imgUrl:"/static/User/10005.png",
                href:"/pages/Level/Level"
              },
              {
                text: 'Account Details',
                imgUrl:"/static/User/10006.png",
                href:"pages/AccountDetails/AccountDetails"
              },
              {
                text: 'Customer Service',
                imgUrl:"/static/User/10007.png",
                href:"pages/CustomerService/CustomerService"
              },
            ],
            menus: [
                {
                    text: 'Login Password',
                    callback: function () {
                        uni.navigateTo({
                            url: '/pages/ChangePwd/ChangePwd'
                        })
                    }
                },
                {
                    text: 'Withdrawal Password',
                    callback: function () {
                      uni.navigateTo({
                        url: '/pages/ChangeWithdrawalPwd/ChangeWithdrawalPwd'
                      })
                    }
                },
                {
                    text: 'Help',
                    callback: function () {
                      uni.navigateTo({
                        url: '/pages/Help/Help'
                      })
                    }
                },
                {
                    text: 'Exit',
                    callback: function () {}
                }
            ]
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
        ...mapMutations(['resetTabBarIndex'])
    }
}
</script>

<style lang="scss" scoped>
.head-container {
    height: 216rpx;
    width: 100%;
    background: #009cde;
}

.head-container .caption {
    font-size: 16px;
    color: #fff;
    text-align: center;
    padding: 20rpx;
}

.placeholder-block {
    height: 200rpx;
    position: relative;
}

.placeholder-block .profile-container {
    position: absolute;
    top: -120rpx;
    background: #fff;
    border-radius: 10px;
    min-height: 260rpx;
    width: 92%;
    left: 4%;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
}

.placeholder-block .profile-container .photo-container {
    display: flex;
    justify-content: flex-start;
    padding: 30rpx;
    padding-bottom: 0;
}

.nav-container {
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    padding-top: 0;
}

.placeholder-block .profile-container .invite-contaier {
    color: #aaaaaa;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    align-items: center;
}

.cp {
    width: 12px;
    height: 14px;
    margin-bottom: 3px;
}

.imgstyle {
    width: 13%;
    height: 13%;
    margin-right: 5px;
}

.placeholder-block .profile-container .nav-container view {
    display: flex;
    justify-content: center;
    align-items: center;
}

.level-container {
    margin: 10rpx 30rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #333;
    background-size: 100% 100%;
    color: #4f4f4f;
    border-radius: 16rpx;
}

.level-container .vip {
    width: 80rpx;
}

.level-container .t1 {
    margin-bottom: 10rpx;
    color: #f5e6c5;
    font-size: 14px;
    font-weight: bold;
}

.level-container .t2 {
    font-size: 10px;
    color: #d4c3a8;
}

.v2 {
    margin-bottom: 20rpx;
}

.level-container button {
    border-radius: 40rpx;
}

.mui-btn-blue {
    color: #fff;
    border: 1px solid #007aff;
    background-color: #007aff;
}

.mui-btn {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    padding: 12rpx 24rpx;
}

.fun-container {
    background: #fff;
    min-height: 100px;
    margin: 30rpx;
    border-radius: 16rpx;
}

.fun-container .title {
    padding: 20rpx;
    font-weight: bold;
    border-bottom: 2rpx solid #f7f7f7;
}

.fun-container .icon-col {
    display: flex;
    justify-content: space-around;
    padding: 10rpx;
    box-shadow: 0 12rpx 30rpx rgba(0, 0, 0, 0.08);
}

.fun-container .icon-col navigator {
    display: inline-block;
}

.icon-col image {
    width: 96rpx;
    height: 96rpx;
}

.icon-col image + view {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 20rpx;
    color: #8f8f94;
}

.menu-container {
    background: #fff;
    min-height: 200rpx;
    margin: 30rpx;
    border-radius: 16rpx;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
}
::v-deep .uni-list-item__container {
    padding: 22rpx 30rpx;
}
</style>
