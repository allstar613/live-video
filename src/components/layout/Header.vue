<template>
  <header id="myHeader">
    <div class="header--title-bar">
      <div>
        <a @click="$router.go(-1)">
          <i class="icon size16 icon-navi_back"></i>
        </a>
      </div>
      <div class="flex">
        <a @click="showEntry" class="ui-button -blue">
          <i class="icon size15 icon-play"></i> 在线影院
        </a>
        <div class="w10"></div>
        <!--
        <a class="ui-button">
          <i class="icon size15 icon-cs"></i> 客服
        </a>

        <div class="livechat_button" data-id="55233c5421">
          <a class="ui-button" href="#">
            <i class="icon size15 icon-cs"></i>客服
          </a>
        </div>
        -->
  
        <div class="livechat_button ui-button" :data-id="livechatID">
          <i class="icon size15 icon-cs"></i>
          <a href="#">客服</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { localStorageUtil } from "@/util.js";

export default {
  props: {
    showEntry: {
      type: Function,
      default: () => {}
    }
  },
  data(){
    return{
      livechatID: localStorageUtil.read("livechatID")
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      infoList: state => state.main.infoList
    })
  },
};
</script>
<style lang="less">
</style>
