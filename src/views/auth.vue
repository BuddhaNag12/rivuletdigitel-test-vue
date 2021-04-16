<template>
  <div>
    <b-container class="mt-5">
      <b-card class="mx-auto" style="max-width: 540px">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="User id"
            label-for="input-1"
            description="We'll never share your UserId with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="userId"
              type="text"
              placeholder="User id"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (this.userId) {
        this.$store.dispatch("userLoginAction", this.userId);
        this.$router.push("/");
      } else {
        alert("provide valid id");
      }
    },
  },
};
</script>

<style scoped>
