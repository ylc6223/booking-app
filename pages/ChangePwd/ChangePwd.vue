<template>
    <view class="container">
        <tui-navigation-bar :isOpacity="false" :isImmersive="false" @init="initNavigation" :scrollTop="scrollTop" backgroundColor="#f7f7f7" color="#333">
            <!-- #ifndef MP-ALIPAY || MP-BAIDU -->
            <view class="bar w-full flex items-center">
                <view class="tui-header-icon"><tui-icon color="#333" name="arrowleft" @click="back"></tui-icon></view>
                <!--                <text class="title">Modify login password</text>-->
                <text class="title">Modify login password</text>
            </view>
            <!-- #endif -->
        </tui-navigation-bar>
        <view style="height: 50px"></view>
        <view class="password-container">
            <view class="form-group">
                <label class="form-label">Old password:</label>
                <view class="input-block">
                    <input type="password" style="border: none; font-size: 12px" class="form-input" name="oldpwd" id="oldpwd" placeholder="Please enter the old password" />
                </view>
            </view>
            <view class="form-group">
                <label class="form-label">New password</label>
                <view class="input-block">
                    <input type="password" style="border: none; font-size: 12px"  name="npwd" id="npwd" placeholder="Please enter you New password" />
                </view>
            </view>
            <view class="form-group">
                <label class="form-label">Confirm password</label>
                <view class="input-block">
                    <input type="password" style="border: none; font-size: 12px" name="cpwd" id="cpwd" placeholder="Please enter Confirm New password" />
                </view>
            </view>
        </view>
      <div class="submit-container">
        <button type="button" class="btn save-btn">Submit</button>
      </div>
    </view>
</template>

<script>
export default {
    data() {
        return {
            top: 0, //标题图标距离顶部距离
            scrollTop: 0
        }
    },
    methods: {
        initNavigation(e) {
            this.top = e.top
        },
        back() {
            uni.navigateBack()
        }
    },
    onPageScroll(e) {
        this.scrollTop = e.scrollTop
    }
}
</script>

<style scoped lang="scss">
.container {
    box-sizing: border-box;
}
.bar {
    height: 44px;
    padding-right: 20rpx;
    padding-left: 20rpx;
    border-bottom: 0;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 1px 6px #ccc;
    box-shadow: 0 1px 6px #ccc;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    top: 0;
}
.tui-header-icon {
    color: #999;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    position: relative;
    z-index: 20;
}
.title {
    font-size: 17px;
    font-weight: 500;
    line-height: 44px;
    position: absolute;
    display: block;
    width: 100%;
    margin: 0 -20rpx;
    padding: 0;
    text-align: center;
    white-space: nowrap;
    color: #000;
}
.password-container {
  background: #fff;
  margin: 40rpx auto;
  width: 92%;
  min-height: 200rpx;
  border-radius: 10px;
  padding: 30rpx;
}
.form-label {
  float: left;
  display: block;
  font-size: 12px;
  padding: 10rpx 10rpx;
  width: 30%;
  font-weight: 400;
  line-height: 40rpx;
  text-align: left;
  position: relative;
}
.input-block {
  margin-left: 30%;
  padding: 15rpx 10rpx;
  min-height: 104rpx;
  line-height: 72rpx;
  vertical-align: middle;
}
::v-deep .input-block .form-input{
  //line-height: 21px;
  width: 100%;
  //height: 80rpx;
  margin-bottom: 30rpx;
  //padding: 20rpx 30rpx;
  -webkit-user-select: text;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 3px;
  outline: 0;
  background-color: #fff;
  -webkit-appearance: none;
}
.submit-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30rpx;
  padding-top: 0;
}
.btn {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  padding: 12rpx 24rpx;
  cursor: pointer;
  -webkit-transition: all;
  transition: all;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  -webkit-transition-duration: .2s;
  transition-duration: .2s;
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
}
.submit-container button {
  color: #fff;
  background: rgb(39, 95, 118) !important;
  border: 0;
  width: 100%;
  padding: 20rpx;
  border-radius: 10px;
  font-weight: bold;
}
</style>
