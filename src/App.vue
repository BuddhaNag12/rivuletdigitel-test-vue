<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>


<script>
export default {
  components: {
    navbar: () => import("@/components/navbar.vue"),
  },
};
</script>

<style>
#app,html,body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
