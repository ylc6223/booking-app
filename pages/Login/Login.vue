<template>
    <view class="container">
        <view class="top-container shrink-0">
            <view>
                <image class="logo" src="/static/Login/imgs/logo_2.png" mode="widthFix" />
                <view>Hi,Welcome to Booking</view>
            </view>
            <view>
                <navigator url="/"><image class="kef" src="/static/Login/imgs/kef_icon2.png" mode="widthFix" /></navigator>
            </view>
        </view>
        <view class="login-container">
            <form action="#" id="theform" method="post">
                <view class="input-container">
                    <image src="/static/Login/imgs/icon_mobile.png" mode="widthFix" />
                    <input class="flex-1" type="text" autocomplete="off" name="uname" id="username" maxlength="30" placeholder="Enter your phone number or username" />
                </view>
                <view class="input-container">
                    <image src="/static/Login/imgs/icon_lock.png" mode="widthFix" />
                    <input class="flex-1" type="password" maxlength="50" autocomplete="off" id="txt_password" name="txt_password" placeholder="Please enter your password" />
                </view>
            </form>
            <view class="btn-container">
                <button type="button" id="submitbut" onclick="sub();" class="btn">Login</button>
            </view>

            <view class="link-container">
                <navigator class="signup" url="/index.php?com=sign8tag-front-index&amp;tpl=reg">Sign up</navigator>
                <navigator url="https://t.me/Lolo9968" style="color: #0097dd">Forgot Password?</navigator>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    height: 100vh;
    background: url('/static/Login/imgs/login_bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.top-container {
    display: flex;
    justify-content: space-between;
    padding: 30rpx;
    align-items: center;
}
.top-container view {
    color: #fff;
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20rpx;
}
.top-container image.logo {
    min-width: 36rpx;
    width: 7%;
    //height: 7%;
}
.top-container image.kef {
    min-width: 120rpx;
    width: 100%;
}
.login-container {
    background: rgba(0, 0, 0, 0.3);
    width: 82%;
    margin: auto;
    min-height: 600rpx;
    border-radius: 10px;
    margin-top: 38%;
}
.input-container {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
    margin: 20rpx;
    margin-top: 0;
    align-items: center;
}
.input-container image {
    min-width: 24rpx;
    width: 4%;
    //height: 5%;
}
::v-deep .input-container input {
    line-height: 21px;
    width: 100%;
    height: 80rpx;
    margin-bottom: 30rpx;
    padding: 20rpx 30rpx;
    -webkit-user-select: text;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    outline: 0;
    background-color: #fff;
    -webkit-appearance: none;
}
::v-deep .input-container input {
    margin: 0;
    background: rgba(0, 0, 0, 0);
    font-size: 14px;
    border: 0;
    color: #fff;
}

.btn-container {
    padding: 20rpx;
}
.btn {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    padding: 6px 12px;
    cursor: pointer;
    -webkit-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    text-align: center;
    vertical-align: top;
    white-space: nowrap;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #fff;
    background-clip: padding-box;
    color: #fff;
    border: 1px solid #007aff;
    background-color: #007aff;
    width: 100%;
    background: rgb(0, 151, 221) !important;
}
.link-container {
    padding: 20rpx;
    display: flex;
    justify-content: space-between;
}
.link-container navigator {
    font-size: 14px;
}
.link-container navigator.signup {
    color: #fff;
}
</style>
