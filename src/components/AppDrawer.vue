<script>
import { router_links } from "@/config";
export default {
  data() {
    return {
      drawer: false,
      mini: false,
      router_links: router_links,
    };
  },
  computed: {
    user() {
      return this.$store.state.authorization.user;
    },
    profile() {
      return this.$store.state.authorization.profile;
    },
    authenticated() {
      return this.$store.getters.authenticated;
    },
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
      <v-list-item to="/settings/" v-if="authenticated">
        <v-list-item-content>
          <v-list-item-title>Profile:</v-list-item-title>
          <v-list-item-subtitle> {{ user.username }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/welcome/" v-else>
        <v-list-item-content>
          <v-list-item-title>Welcome!</v-list-item-title>
          <v-list-item-subtitle
            >Please login or create an account.</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <div v-for="item in router_links" :key="item.id">
          <v-list-item
            :to="item.url"
            link
            v-if="(!item.no_auth && !authenticated) || authenticated"
            :disabled="item.requires_authentication && !authenticated"
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
        </div>

        <!-- Profile login/logout/registration -->
        <v-list-item v-if="authenticated" to="/logout/" link>
          <v-list-item-icon
            ><span class="material-symbols-outlined">
              logout
            </span></v-list-item-icon
          >
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!authenticated" to="/login/" link>
          <v-list-item-icon
            ><span class="material-symbols-outlined">
              login
            </span></v-list-item-icon
          >
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!authenticated" to="/registration/" link>
          <v-list-item-icon
            ><span class="material-symbols-outlined">
              manage_accounts
            </span></v-list-item-icon
          >
          <v-list-item-content>
            <v-list-item-title>Registration</v-list-item-title>
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
