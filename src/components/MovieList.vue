<template>
  <section class="contents">
    <div class="video-list">
      <ul>
        <li @click="showDetail(movie)" v-for="(movie, index) in videoList.data" :key="index">
          <div class="flex child-between align-items-center" style="width:100%">
            <div>
              <img class="img-video" :src="movie.image" alt />
            </div>
            <div class="flex child-between align-items-center" style="width:100%">
              <div class="p15">
                <h4 class="mb10">{{ movie.title }}</h4>
                <div class="flex">
                  <div class="mr10">
                    <i class="icon icon-like size15"></i>
                    <span>{{ movie.evaluation }}</span>
                  </div>
                  <div>
                    <i class="icon icon-view size15"></i>
                    <span>{{ movie.look }}</span>
                  </div>
                </div>
              </div>
              <div>
                <a>
                  <i class="icon icon-play2 size20"></i>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <div @click="previous">
        <i class="icon icon-arrow-left size30"></i>
      </div>
      <div @click="nextPage">
        <i class="icon icon-arrow-right size30"></i>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { localStorageUtil } from "@/util.js";

export default {
  data() {
    return {
      pageindex: 0,
      timer: null
    };
  },
  methods: {
    ...mapActions({
      getInfo: "main/getInfo",
      getVideoList: "main/getVideoList",
      testCDN: "cdn/testCDN"
    }),
    showDetail(movie) {

      localStorageUtil.create("currentID", movie.id);

      this.$router.push("/detail/" + movie.id);
    },
    nextPage() {
      this.pageindex += 1;
      const params = {
        page: this.pageindex
      };
      this.getVideoList(params);
      this.backTop();
    },
    previous() {
      if (this.pageindex == 0) {
        return;
      } else {
        this.pageindex -= 1;
        const params = {
          page: this.pageindex
        };
        this.getVideoList(params);
      }
      this.backTop();
    },
    CDN() {
      if (this.timer) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(() => {
          this.testCDN();
        }, 60000);
      }
    },

    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  },
  computed: {
    ...mapState({
      infoList: state => state.main.infoList,
      videoList: state => state.main.videoList,
      cdn: state => state.cdn.cdn
    })
  },
  created() {

    const params_info = {
      id: localStorageUtil.read("agency")
    }
    this.getInfo(params_info);
    const params = {
      page: 0
    };
    this.getVideoList(params);
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    this.testCDN();
    this.CDN();

    const a = localStorageUtil.read("key");
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
    clearInterval(this.timer);
  }
};
</script>

<style>
</style>
