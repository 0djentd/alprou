<script>
import { useProfileDataStore } from "../stores/profile_data";
export default {
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
    },
  },
};
</script>

<template>
  <main class="w-50 m-auto">
    <h1>Login</h1>
    <form>
      <div>
        <input id="username" placeholder="Username" v-model="this.username" />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="this.password"
        />
      </div>
      <input
        type="checkbox"
        name="remember"
        id="remember"
        v-model="this.remember"
      />
      <label for="remember">Remember</label>
      <button
        action=""
        method=""
        class="btn btn-primary"
        @click.prevent="login"
      >
        Login
      </button>
    </form>
  </main>
</template>
