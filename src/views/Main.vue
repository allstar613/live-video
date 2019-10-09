<template>
  <main>
    <Entry :is-visible="isEntryVisible" v-on:hide-entry="hideEntry" />
    <Notification
    :is-visible="isNotificationVisible"
    v-on:hide-notification="hideNotification"
    />
    <Header :show-entry="showEntry" />
    <router-view
     v-on:show-notification="showNotification"
     ></router-view>
  </main>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import Entry from '@/components/Entry.vue';
import Notification from '@/components/Notification.vue';


export default {
  data: () => ({
    isEntryVisible: false,
    isNotificationVisible: false,
  }),
  components: {
    Header,
    Entry,
    Notification,
  },
  methods: {
    showEntry() {
      this.isEntryVisible = true;
    },
    hideEntry() {
      this.isEntryVisible = false;
    },
    showNotification() {
      this.isNotificationVisible = true;
    },
    hideNotification() {
      this.isNotificationVisible = false;
    },

  },
};
</script>

<style lang="less">

</style>
