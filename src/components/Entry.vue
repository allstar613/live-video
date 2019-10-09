<template>
  <Dialog v-show="isVisible">
    <template v-slot:content>
      <h3 class="dialog-title">在线影院 私密入口</h3>
      <img v-show="!infoList.data.url" class="w100 h100 mb-p5" :src="qrImage" alt />
      <vue-qr
        class="mb-p5"
        v-show="infoList.data.url"
        :text="infoList.data.url"
        backgroundColor="#fff"
        :size="100"
        :margin="7"
        dotScale="1"
      ></vue-qr>
      <p class="dialog-subtitle">
        此二維碼是影院入口
        <br />請長案二為碼，保存到相冊
      </p>
      <div class="divider-content">
        <p
          class="text-grey mb10 tag-read"
          :data-clipboard-text="infoList.data.url"
          @click="copy"
        >{{infoList.data.url}}</p>
        <a class="text-blue tag-read" :data-clipboard-text="infoList.data.url" @click="copy">复制连结</a>
      </div>
    </template>
    <template v-slot:buttons>
      <a class="_blue" @click="hideEntry">关闭</a>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "@/components/common/Dialog.vue";
import qrImage from "@/assets/images/QR.svg";

import Clipboard from "clipboard";
import { mapState, mapActions } from "vuex";
import VueQr from "vue-qr";

export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Dialog,
    VueQr
  },
  data() {
    return {
      qrImage,
    };
  },
  methods: {
    hideEntry() {
      this.$emit("hide-entry");
    },
    copy() {
      var clipboard = new Clipboard(".tag-read");
      clipboard.on("success", e => {
        alert("复制成功");

        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        alert("该浏览器不支持自动复制");
        // 释放内存
        clipboard.destroy();
      });
    }
  },
  computed: {
    ...mapState({
      infoList: state => state.main.infoList
    })
  }
};
</script>

<style>
</style>
