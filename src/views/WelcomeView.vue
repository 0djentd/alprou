<script>
export default {
  data() {
    return {
      features: [
        {
          title: this.$t("pages.about.features.ui.title"),
          description: this.$t("pages.about.features.ui.description"),
          img: null,
        },
        {
          title: this.$t("pages.about.features.languages.title"),
          description: this.$t("pages.about.features.languages.description"),
          img: null,
        },
        {
          title: this.$t("pages.about.features.stats.title"),
          description: this.$t("pages.about.features.stats.description"),
          img: null,
        },
        {
          title: this.$t("pages.about.features.profiles.title"),
          description: this.$t("pages.about.features.profiles.description"),
          img: null,
        },
        {
          title: this.$t("pages.about.features.spa.title"),
          description: this.$t("pages.about.features.spa.description"),
          img: null,
        },
        {
          title: this.$t("pages.about.features.themes.title"),
          description: this.$t("pages.about.features.themes.description"),
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
      <div class="welcome-info">
        <v-card>
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
      </div>
      <div class="welcome-features">
        <v-card>
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
      </div>
      <div class="welcome-screenshot">
        <v-card>
          <v-card-title>{{
            $t("pages.about.text.screenshots.title")
          }}</v-card-title>
          <div class="screenshot-container">
            <v-img class="screenshot" src="/screenshot_alprou.png"></v-img>
          </div>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.welcome {
  align-items: stretch;
  justify-content: space-between;

  .welcome-screenshot,
  .welcome-features,
  .welcome-info {
    padding: 10px;
    margin: 0 auto;
    .v-card {
      margin: 10px auto;
    }
  }
  .welcome-info {
    max-width: 300px;
  }
  .welcome-features {
    max-width: 700px;
  }
  .welcome-screenshot {
    max-width: 300px;
  }
}
.screenshot-container {
  padding: 10px;
  .screenshot {
    border-radius: 10px;
  }
}
</style>
