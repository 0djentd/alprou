<script>
import { router_links } from "@/config";
export default {
  data() {
    return {
      drawer: false,
      mini: false,
      profile: { username: "username" },
      user: null,
      router_links: router_links,
    };
  },
  async mounted() {
    this.profile = await this.$store.getters.profile;
    this.user = await this.$store.getters.user;
  },
};
</script>

<template>
  <div>
    <v-navigation-drawer floating permanent class="drawer-menu">
      <v-btn @click="drawer = true" @mouseover="drawer = true">
        <span>Menu &ensp; </span>
        <span class="material-symbols-outlined"> menu </span>
      </v-btn>
    </v-navigation-drawer>
    <v-overlay
      @click="drawer = false"
      @mouseover="drawer = false"
      v-if="drawer"
      value="drawer"
      z-index="1"
    ></v-overlay>
    <v-navigation-drawer
      z-index="2"
      :mini-variant.sync="mini"
      v-if="drawer"
      floating
      permanent
      absolute
    >
      <!--       <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h4"> Alprou </v-list-item-title>
          <v-list-item-subtitle> Habits tracker </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider> -->
      <v-list-item to="/settings">
        <v-list-item-content>
          <v-list-item-title>Profile</v-list-item-title>
          <v-list-item-subtitle> {{ user.username }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="item in router_links"
          :key="item"
          :to="item.url"
          link
        >
          <v-list-item-icon
            ><span class="material-symbols-outlined">
              {{ item.icon }}
            </span></v-list-item-icon
          >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style lang="scss" scoped>
.v-navigation-drawer {
  max-width: 200px;
}
.drawer-menu {
  position: absolute;
  z-index: 1;
  max-width: 108px;
  max-height: 38px;
  margin-top: 56px;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 2px;
}
</style>
