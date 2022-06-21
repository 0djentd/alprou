<script>
export default {
  data() {
    return {
      year: 2022,
      router_links: [
        { url: "/", name: "Home" },
        { url: "/profile/", name: "Profile" },
        { url: "/login/", name: "Login" },
        { url: "/logout/", name: "Logout" },
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
  <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center">
        <li class="nav-item" :key="link.url" v-for="link in router_links">
          <router-link :to="link.url" class="nav-link px-2 text-muted">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
      <v-divider />
      <ul class="nav justify-content-center">
        <li class="nav-item" :key="link.url" v-for="link in api_links">
          <a :href="link.url" class="nav-link px-2 text-muted">
            {{ link.name }}
          </a>
        </li>
      </ul>
      <v-divider />
      <p class="text-center text-muted">&copy; {{ year }} 0djentd</p>
    </footer>
  </div>
</template>
