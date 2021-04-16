<template>
  <div>
    <b-container class="mt-5">
      <b-alert v-if="added" variant="danger" dismissible> Added post </b-alert>
      <b-overlay :show="loading" rounded="sm">
        <b-card class="mx-auto" style="max-width: 20rem">
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Enter post title:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="postTitle"
                type="text"
                placeholder="Enter Post"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Enter post title:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="postBody"
                type="text"
                placeholder="Enter Body"
                required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-card>
      </b-overlay>
      <b-overlay :show="loading" rounded="sm">
        <b-card style="max-width: 40rem" class="mx-auto">
          <h1 class="display-4">ALL Posts</h1>

          <div v-for="(item,index) in localPosts" :key="item.userId">
            <b-row>
              <b-col cols="8">
                <b-list-group-item class="m-2">{{
                  item.title
                }}</b-list-group-item>
              </b-col>
              <b-col cols="4">
                <b-button
                  variant="danger"
                  class="mt-2"
                  @click="removePost(index)"
                  >Remove</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-overlay>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      postTitle: "",
      postBody: "",
      id: Math.floor(Math.random() * 100),
    };
  },
  computed: {
    // all getters cached here traking any changes
    ...mapGetters({
      loading: "isLoading",
      added: "added",
      localPosts: "getLocalPosts",
    }),
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const payload = {
        body: this.postBody,
        title: this.postTitle,
        userId: this.id,
      };
      this.$store.dispatch("createPost", payload);
    },
    removePost(index){
        this.$store.dispatch("deletePost", index);
    }
  },
};
</script>