<script>
export default {
  methods: {
    link() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div class="app-logo">
    <a @click="link">
      <div>
        <h4>Alprou</h4>
        <v-divider />
      </div>
      <p>Minimalistic habits tracker.</p>
    </a>
    <v-divider />
  </div>
</template>

<style lang="scss" scoped>
p,
h4 {
  text-align: center;
}
.app-logo {
  margin: 10px auto 20px auto;
  padding: 8px 30px 2px 30px;
  border-radius: 6px;
  text-decoration: none;
  background-color: rgb(34, 34, 34);
  a {
    div {
      display: flex;
      .v-divider {
        margin-left: 20px;
      }
    }
  }
}
</style>
