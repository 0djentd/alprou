<script>
export default {
  data() {
    return {
      year: 2022,
      router_links: [
        { url: "/", name: "Home" },
        { url: "/login/", name: "Login" },
        { url: "/logout/", name: "Logout" },
        { url: "/registration/", name: "Registration" },
        { url: "/settings/", name: "Settings" },
        { url: "/welcome/", name: "New user" },
        { url: "/about/", name: "About" },
      ],
      api_links: [
        { url: "http://localhost:8000/docs/redoc/", name: "API docs (1)" },
        { url: "http://localhost:8000/docs/swagger/", name: "API docs (2)" },
        { url: "http://localhost:8000/api/habits/", name: "habits" },
        { url: "http://localhost:8000/api/profiles/", name: "profiles" },
        { url: "http://localhost:8000/api/users/", name: "users" },
        { url: "http://localhost:8000/api/days/", name: "days" },
      ],
    };
  },
};
</script>

<template>
  <v-footer class="py-2 my-2">
    <footer class="mx-auto">
      <ul class="nav justify-content-center">
        <li class="nav-item" :key="link.url" v-for="link in router_links">
          <router-link :to="link.url" class="nav-link px-2 text-muted">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
      <div v-if="!this.$store.state.theme.hide_api_links">
        <v-divider />
        <ul class="nav justify-content-center">
          <li class="nav-item" :key="link.url" v-for="link in api_links">
            <a :href="link.url" class="nav-link px-2 text-muted">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
      <v-divider />
      <p class="text-center text-muted">&copy; {{ year }} 0djentd</p>
    </footer>
  </v-footer>
</template>
