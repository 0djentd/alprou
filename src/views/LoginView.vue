<script lang="ts">
import { defineComponent } from "vue";
import { useProfileDataStore } from "../stores/profile_data";

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
      remember: false,
      profile_data: useProfileDataStore(),
    };
  },
  methods: {
    login() {
      this.profile_data.login(this.username, this.password);
      this.$router.push("/");
    },
  },
});
</script>

<template>
  <main class="w-50 m-auto">
    <div class="login-ui m-4">
      <form class="card">
        <h1 class="card-header">Login</h1>
        <div class="card-body text-center">
          <div>
            <input
              id="username"
              placeholder="Username"
              v-model="this.username"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              v-model="this.password"
            />
          </div>
          <!--           <input
            type="checkbox"
            name="remember"
            id="remember"
            class="m-1"
            v-model="this.remember"
          />
          <label for="remember">Remember</label> -->
        </div>
        <button
          action=""
          method=""
          class="btn btn-primary"
          @click.prevent="login"
        >
          Login
        </button>
      </form>
    </div>
  </main>
</template>
