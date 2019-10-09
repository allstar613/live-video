<template>
  <div class="mainbackground">
    <section class="content h100p">
      <div class="flex child-center mb-p5" style="width:100%; height:57%">
        <div class="video-view" style="width:95%;">
          <div style="width:100%; height:55%">
            <img style="width:100%; height:100%" :src="recommendVideoList.image" alt />
          </div>

          <div class="flex child-center mb-p5" style="width:100%; height:25%">
            <div class="p20">
              <h4 class="mb10">{{recommendVideoList.title}}</h4>
              <div class="flex">
                <div class="mr10">
                  <i class="icon icon-like size15"></i>
                  <span>{{recommendVideoList.evaluation}}</span>
                </div>
                <div>
                  <i class="icon icon-view size15"></i>
                  <span>{{recommendVideoList.look}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="align-items-right" style="width:100%; height:10%; ">
            <div style="width:100%; height:20%;">
              <a @click="showNotification" class="ui-button -orange p15">
                <i class="icon icon-play3 size20"></i>
              </a>
            </div>
          </div>

          <!--
          <div class="align-items-center child-center" style="width:100%; height:25%">
      
          </div>
          -->
        </div>
      </div>

      <div class="hot-recommend mb-p1">热门推荐</div>
      <div class="hot-recommend" style="height:21%">
        <ul style="height:100%">
          <li
            @click="changeVedio(recommend)"
            v-for="(recommend, index) in recommendVedio"
            :key="index"
            style="width:31.5%;height:100%"
          >
            <div style="height:100%;">
              <div class="mb-p10" style="height:80%; width:100%; ">
                <img :src="recommend.image" alt style="height:100%" />
              </div>
              <div class="ellipsis" style="height:20%;">{{recommend.title}}</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="pagination" style="width:100%; height:10%">
        <div @click="previousVedio">
          <i class="icon icon-arrow-left size30"></i>
        </div>
        <div @click="nextVedio">
          <i class="icon icon-arrow-right size30"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { localStorageUtil } from "@/util.js";

export default {
  props: ["id"],
  data: () => ({
    isNotificationVisible: true,
    currentID: 0
  }),
  components: {},
  methods: {
    ...mapActions({
      getPlayContent: "content/getPlayContent",
      getRecommendVideoList: "content/getRecommendVideoList",
      testCDN: "cdn/testCDN"
    }),
    showNotification() {
      this.$emit("show-notification");
    },
    nextVedio() {
      localStorageUtil.create("currentID", this.recommendVideoList.next);

      const params = {
        id: this.recommendVideoList.next
      };
      this.getRecommendVideoList(params);
    },
    previousVedio() {
      localStorageUtil.create("currentID", this.recommendVideoList.previous);
      const params = {
        id: this.recommendVideoList.previous
      };
      this.getRecommendVideoList(params);
    },
    changeVedio(recommend) {
      const params = {
        id: recommend.id
      };
      this.getRecommendVideoList(params);
    },
    CDN() {
      if (this.timer) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(() => {
          this.testCDN();
        }, 60000);
      }
    }
  },
  computed: {
    ...mapState({
      playData: state => state.content.playData,
      recommendVideoList: state => state.content.recommendVideoList,
      cdn: state => state.cdn.cdn
    }),
    currentVedio() {
      return this.recommendVideoList.current;
    },
    recommendVedio() {
      return this.recommendVideoList.data;
    }
  },
  created() {
    if (localStorageUtil.read("video")) {
      this.currentID = localStorageUtil.read("video");
    } else {
      this.currentID = localStorageUtil.read("currentID");
    }

    const params = {
      id: this.currentID
    };
    this.getRecommendVideoList(params);
  },
  mounted() {
    this.testCDN();
    this.CDN();
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style>
</style>
