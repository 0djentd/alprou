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
          title: "Multiple languages",
          description: "App available in multiple languages.",
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
    <div class="welcome d-flex flex-wrap flex-lg-nowrap">
      <v-card class="welcome-info">
        <v-card-title>{{ $t("pages.about.text.info.title") }}</v-card-title>
        <v-card-text>
          <p>
            {{ $t("pages.about.text.info.subtitle.1") }}
            <router-link to="/login/">
              {{ $t("pages.about.text.info.subtitle.2") }}</router-link
            >
            {{ $t("pages.about.text.info.subtitle.3") }}
            <router-link to="/registration/">
              {{ $t("pages.about.text.info.subtitle.4") }}
            </router-link>
          </p>
          <p></p>
          <p>
            {{ $t("pages.about.text.info.subtitle.5") }}
            <a href="https://github.com/0djentd/">
              {{ $t("pages.about.text.info.subtitle.6") }}
            </a>
            {{ $t("pages.about.text.info.subtitle.7") }}
            <router-link to="/about/#about-api">
              {{ $t("pages.about.text.info.subtitle.8") }}
            </router-link>
          </p>
        </v-card-text>
      </v-card>
      <v-card class="welcome-features">
        <v-card-title>
          {{ $t("pages.about.text.features.title") }}
        </v-card-title>
        <v-card-text>
          <v-sheet v-for="feature in features" :key="feature.id">
            <h5>{{ feature.title }}</h5>
            <p>{{ feature.description }}</p>
            <v-img v-if="feature.img" :src="feature.img" />
          </v-sheet>
        </v-card-text>
      </v-card>
      <v-card class="welcome-screenshot">
        <v-card-title>{{
          $t("pages.about.text.screenshots.title")
        }}</v-card-title>
        <div class="screenshot-container">
          <v-img class="screenshot" src="/screenshot_alprou.png"></v-img>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.welcome {
  align-items: flex-start;
  justify-content: space-between;
  .v-card {
    margin: 10px;
  }
  .welcome-info {
    max-width: 300px;
  }
  .welcome-features {
    max-width: 700px;
  }
  .welcome-screenshot {
    .screenshot-container {
      padding: 10px;
      .screenshot {
        border-radius: 20px;
      }
    }
  }
}
.v-card {
  margin: 0 auto;
  margin-bottom: 50px;
}
</style>
