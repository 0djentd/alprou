<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    login() {
      this.$store.commit("login", {
        username: this.username,
        password: this.password,
      });
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div class="w-50 m-auto">
    <div class="login-ui m-4">
      <form class="card">
        <h1 class="card-header">Login</h1>
        <div class="card-body text-center">
          <div>
            <input id="username" placeholder="Username" v-model="username" />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              v-model="password"
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
  </div>
</template>
