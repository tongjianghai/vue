<template>
  <div class="home">
    <h1>home</h1>
    <!-- <li v-for="v in news">{{ v.id }} - {{ v.title }}</li> -->
    <li v-for="v in goods">
      {{ v.title }}
    </li>
    <li v-for="v in users">
      {{ v.name }}
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [
        { id: 1, title: "cms" },
        { id: 2, title: "php" },
      ],
    };
  },
  computed: {
    goods() {
      //   return this.$store.state.news;
      return this.$store.getters.getAllNews;
    },
    users() {
      return this.$store.getters.getAllUsers;
    },
  },
};
</script>

<style lang="less" scoped>
body {
  h1 {
    background: red;
    color: yellow;
  }
}
</style>