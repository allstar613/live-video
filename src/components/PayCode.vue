<template>
  <main>
    <section class="contents mainbackground">
      <div class="text-center mb-p5 mt-p5">
        <h2 class="text-red fz-p7 mb-p2 font-bold">扫码支付金额 {{payData.money}}元</h2>
        <h3 class="fz-p3 text-grey2">务必输入准确金额，不能多也不能少。</h3>
      </div>

      <div class="flex child-center" style="height:45%">
        <img :src="payData.img" alt style="height:100%;" />
      </div>

      <div class="text-center mt-p5 mb-p5">
        <h4 class="fz-p5 bold text-red mb10">【请在 {{second}} 秒前完成支付】</h4>
        <h5 class="fz-p4 text-red">付款后自动跳转到播放页面</h5>
      </div>
      <div class="align-items-center child-center" style="width:100%; height:7%">
        <div class="fz-p4 text-center">用微信扫码付款</div>
        <div class="flex child-center" style="height:15%;width:100%">
          <div class="scan-pay--title" style="width:60%"></div>
        </div>
      </div>

      <div style="width:100%;height:10%">
        <div class="flex child-between align-items-center" style="width:100%; height:100%">
          <div style="width:20%"></div>
          <div class="align-items-center" style="width:20%;  height:100%">
            <div class="flex child-center mb-p10" style="height:70%">
              <img :src="iconQR" alt style="height:100%;" />
            </div>
            <div class="text-center" style="font-size:2.3vmin">长按二维码</div>
          </div>
          <div class="ui-divider" style="width:1px"></div>
          <div style="width:20%;  height:100%">
            <div class="flex child-center mb-p10" style="height:70%">
              <img :src="iconCheck" alt style="height:100%;" />
            </div>
            <div class="text-center" style="font-size:2.3vmin">输入支付金额完成付款</div>
          </div>
          <div class="ui-divider" style="width:1px"></div>
          <div style="width:20%;  height:100%">
            <div class="flex child-center mb-p10" style="height:70%">
              <img :src="iconPad" alt style="height:100%;" />
            </div>
            <div class="text-center" style="font-size:2.3vmin">跳转后即可观看影片</div>
          </div>
          <div style="width:20%"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import iconQR from "@/assets/images/icn_qrcode.png";
import iconCheck from "@/assets/images/icn_check.png";
import iconPad from "@/assets/images/icn_pad.png";
import api from "@/api";
import { readCookie, createCookie, deleteCookie,localStorageUtil } from "@/util.js";

export default {
  data() {
    return {
      iconQR,
      iconCheck,
      iconPad,
      second: 120,
      timer_second: null,
      timer_checkPay: null
    };
  },
  methods: {
    ...mapActions({
      checkPayCheck: "pay/checkPayCheck"
    }),
    reciprocal() {
      if (this.timer_second) {
        clearInterval(this.timer_second);
      } else {
        this.timer_second = setInterval(() => {
          if (this.second == 0) {
            this.$router.go(-1);
          }
          this.second--;
        }, 1000);
      }
    },
    check() {
      if (this.timer_checkPay) {
        clearInterval(this.timer_checkPay);
      } else {
        this.timer_checkPay = setInterval(() => {
          this.checkPayApi();
        }, 3000);
      }
    },
    checkPayApi() {
      const params = {
        orderid: this.payList.data.orderid
      };

      api.checkPayCheck(params).then(res => {
        if (res.status == 1) {

          localStorageUtil.create("playvideo", res.data.video);
          createCookie("playvideo", res.data.video);

          this.$router.push("/playvideo");
        }
      });
    }
  },
  computed: {
    ...mapState({
      payList: state => state.pay.payList
    }),
    payData() {
      return this.payList.data;
    }
  },
  mounted() {
    if (!this.payData.money) {
      this.$router.go(-1);
    }

    const params = {
      orderid: this.payList.data.orderid
    };

    this.checkPayCheck(params);

    this.reciprocal();
    this.check();
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
    clearInterval(this.timer_second);
    clearInterval(this.timer_checkPay);
  }
};
</script>

<style>
</style>
