<template>
  <v-app>
    <v-app-bar app color="deep-black accent-4" dark dense>
      <v-app-bar-nav-icon> </v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-icon>mdi-store</v-icon>
        <sub class="text-grey">ShopLines</sub>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <form action="#" method="get">
          <input
            type="text"
            name="search"
            maxlength="60"
            placeholder="Search..."
            required
          />
          <button type="submit"><v-icon>mdi-magnify</v-icon></button>
        </form>
      </div>

      <router-link to="/sign-up"
        ><v-btn icon>
          <v-icon> mdi-account-circle </v-icon>

          <v-tooltip activator="parent" location="bottom">
            {{ displayUserProfile }}
          </v-tooltip>
        </v-btn>
      </router-link>

      <v-menu left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
  </v-app>
</template>

<script setup>
import axios from "axios";
import { ref, computed } from "vue";
const userArr = ref([]);
let activeUserProfile = ref([]);
async function get() {
  try {
    const data = await axios.get(
      "https://api.escuelajs.co/api/v1/users?limit=2000"
    );
    userArr.value = await data.data;
    const activeUser = JSON.parse(localStorage.getItem("loggedUser"));
    activeUserProfile.value = await userArr.value.find(
      (user) => user.email === activeUser.email
    );
    console.log(activeUserProfile.value.name, "hiiiiiii");
  } catch (error) {
    console.log(error);
  }
}
get();

const displayUserProfile = computed(() => {
  if (activeUserProfile.value) {
    return activeUserProfile.value.name;
  } else {
    return "Loading...";
  }
});
</script>

<style>
.v-application__wrap {
  min-height: 10vh !important;
}
</style>