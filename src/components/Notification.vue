<template>
  <Dialog v-show="isVisible">
    <template v-slot:content>
      <h3 class="dialog-title">温馨提醒</h3>
      <p class="dialog-subtitle">即将前往支付页面，请务必根据准确金额支付。</p>
    </template>
    <template v-slot:buttons>
      <a @click="hide">取消</a>
      <div class="ui-divider2"></div>
      <a @click="showPaycode">确认</a>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "@/components/common/Dialog.vue";
import api from "@/api";
import { mapState, mapActions, mapMutations } from "vuex";
import { readCookie, createCookie, deleteCookie,localStorageUtil } from "@/util.js";

export default {
  components: {
    Dialog
  },
  props: {
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState({
      payList: state => state.pay.payList,
      recommendVideoList: state => state.content.recommendVideoList
    })
  },
  methods: {
    ...mapActions({
      getVideoList: "main/getVideoList"
    }),
    ...mapMutations({
      changeData: "pay/createPay"
    }),
    hide() {
      this.$emit("hide-notification");
    },
    showPaycode() {
      this.makePay();
      //    this.$router.push("/paycode");
      this.$emit("hide-notification");
    },
    makePay() {
      const params = {
        video: this.recommendVideoList.id,
        agency: localStorageUtil.read("agency")
      };
      api.createPay(params).then(res => {
        if (res.status == 1) {
          this.changeData(res);
          this.$router.push("/paycode");
        } else if (res.status == 4001) {
          localStorageUtil.create("playvideo", this.recommendVideoList.id);
          createCookie("playvideo", this.recommendVideoList.id);

          this.$router.push("/playvideo");
        } else if (res.status == 6001) {
          alert(res.message);
        }
      });
    }
  }
};
</script>

<style>
</style>
