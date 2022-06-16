<script>
import axios from "axios";
import { useProfileDataStore } from '../stores/profile_data';
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
      const url = "http://localhost:8000/api/authtoken/";
      axios({
        url: url,
        method: "POST",
        data: {
          username: this.username,
          password: this.password,
        },
      })
        .then((res) => {
          const token = res.data.token;
          localStorage.setItem("token", token);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <main class="w-50 m-auto">
    <h1>Login</h1>
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
    <button action="" method="" class="btn btn-primary" @click="login">
      Login
    </button>
  </main>
</template>
