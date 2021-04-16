<template>
  <div class="pt-2 p-2 m-2">
    <b-alert show>Dashboard</b-alert>
    <b-container>
      <b-card
        style="max-width: 20rem"
        class="mx-auto"
        :title="`Create post ${user}`"
      >
        <b-button to="/create">Create Post</b-button>
      </b-card>
      <div>
        <b-list-group>
          <b-overlay :show="loading" rounded="sm">
            <b-card style="max-width: 40rem" class="mx-auto">
              <h1 class="display-4">ALL Posts</h1>

              <div v-for="item in getAllPosts" :key="item.id">
                <b-row>
                  <b-col cols="12">
                    <b-list-group-item class="m-2">{{
                      item.title
                    }}</b-list-group-item>
                  </b-col>
                </b-row>
              </div>
            </b-card>
          </b-overlay>
        </b-list-group>
      </div>
    </b-container>
  </div>
</template>

<script >
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      user: "user",
      getAllPosts: "getAllPosts",
      loading: "isLoading",
    }),
  },
  mounted() {
    if (!this.isLoggedIn) this.$router.push("/auth");
  },
  methods: {
    removePost(id) {
      this.$store.dispatch("deletePost", id);
    },
  },
};
</script>
