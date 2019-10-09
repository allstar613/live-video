<template>
  <section class="contents mainbackground">
    <div class="playvideo-title text-center font-bold">
      <div style="height:30%"></div>
      <div class="fz-p4">{{playData.data.title}}</div>
      <div style="height:30%"></div>
    </div>
    <div style="width:100%">
      <video autoplay webkit-playsinline controls style="width:100%;">
        <source :src="playData.data.video" type="application/x-mpegURL" />
      </video>
    </div>

    <div class="flex child-between align-items-center mt-p5" style="width:100%">
      <div></div>
      <div
        class="text-center fz-p3 text-orange3"
        style="width:80%; line-height:5vmin"
      >提醒：點擊播放後，等待緩衝30秒即可正常播放，盡量在WIFI下觀看會更流暢！</div>
      <div></div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { readCookie, createCookie, deleteCookie,localStorageUtil } from "@/util.js";

export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getPlayContent: "content/getPlayContent"
    })
  },
  computed: {
    ...mapState({
      recommendVideoList: state => state.content.recommendVideoList,
      playData: state => state.content.playData
    })
  },
  created() {
  //  const id = localStorageUtil.read("playvideo");
    const id = readCookie("playvideo");
    const params = { video: id };
    this.getPlayContent(params);
  },
};
</script>

<style>
</style>
