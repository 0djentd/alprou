<script>
export default {
  data() {
    return {
      features: [
        {
          title: "Minimalistic UI",
          description: "Designed for mobile devices and desktop",
          img: null,
        },
        {
          title: "Stats",
          description: "Take a look at various statistics.",
          img: null,
        },
        {
          title: "User profiles",
          description:
            "Settings like habits/profile visibility to other users.",
          img: null,
        },
        {
          title: "SPA",
          description: "No page reloads when using this app.",
          img: null,
        },
        {
          title: "Themes",
          description: "Change some UI settings.",
          img: null,
        },
      ],
    };
  },
};
</script>

<template>
  <v-container>
    <div class="welcome">
      <v-card class="welcome-info">
        <v-card-title>Welcome!</v-card-title>
        <v-card-text>
          <p>
            To use this app, please
            <router-link to="/login/"> login</router-link> or
            <router-link to="/registration/"> create an account</router-link>.
          </p>
          <p></p>
          <p>
            You can also take a look at the source code on my
            <a href="https://github.com/0djentd/">github</a>. or learn more
            about
            <router-link to="/about/#about-api">Alprou's API</router-link>.
          </p>
        </v-card-text>
      </v-card>
      <v-card class="welcome-features">
        <v-card-title> Some of the features: </v-card-title>
        <v-card-text>
          <v-sheet v-for="feature in features" :key="feature.id">
            <h5>{{ feature.title }}</h5>
            <p>{{ feature.description }}</p>
            <v-img v-if="feature.img" :src="feature.img" />
          </v-sheet>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .welcome-info {
    max-width: 300px;
  }
  .welcome-features {
    max-width: 700px;
  }
}
.v-card {
  margin: 0 auto;
  margin-bottom: 50px;
}
</style>
