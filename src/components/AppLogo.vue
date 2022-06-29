<script>
export default {
  props: {
    url: { type: String, required: false, default: "/" },
    outline: { type: Boolean, required: false, defalut: false },
  },
  methods: {
    link() {
      this.$router.push(this.url);
    },
  },
};
</script>
<template>
  <div
    :class="{
      'app-logo': true,
      'logo-theme-dark': this.$vuetify.theme.dark && this.outline,
      'logo-theme-light': !this.$vuetify.theme.dark && this.outline,
    }"
  >
    <a @click="link">
      <div>
        <h4>Alprou</h4>
        <v-divider />
      </div>
      <p>{{ $t("logo.description_short") }}</p>
    </a>
    <v-divider />
  </div>
</template>

<style lang="scss" scoped>
$dark-theme-bg: rgb(34, 34, 34);
$dark-theme-outline: rgb(207, 207, 207);
$light-theme-bg: rgb(207, 207, 207);
$light-theme-outline: rgb(243, 243, 243);

p,
h4 {
  text-align: center;
}
.app-logo {
  margin: 24px auto 0 auto;
  padding: 8px 0 2px 0;
  border-radius: 6px;
  text-decoration: none;
  a {
    div {
      display: flex;
      .v-divider {
        margin-left: 20px;
      }
    }
  }
}
.logo-theme-dark {
  background-color: $dark-theme-bg;
  border: 2px solid $dark-theme-outline;
}
.logo-theme-light {
  border: 2px solid $light-theme-bg;
  background-color: $light-theme-outline;
}
</style>
