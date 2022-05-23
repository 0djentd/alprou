<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    year: Number,
    links: Array,
  },
  components: [RouterLink],
};
</script>
<template>
  <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item" :key="link.url" v-for="link in links">
          <RouterLink :to="link.url" class="nav-link px-2 text-muted">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
      <p class="text-center text-muted">&copy; {{ year }} 0djentd</p>
    </footer>
  </div>
</template>
