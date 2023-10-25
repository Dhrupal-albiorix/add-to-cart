<template>
  <v-container>
    <NavBar />
    <v-col cols="12"
      ><v-card color="#1F7087" theme="dark">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5">
              {{ displayUserProfile.name }}
            </v-card-title>

            <v-card-subtitle> {{ displayUserProfile.role }}</v-card-subtitle>
            <v-card-subtitle> {{ displayUserProfile.email }}</v-card-subtitle>

            <v-card-actions>
              <v-btn class="ms-2" variant="outlined" size="small" @click="editProfile">
                Edit profile
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="`${displayUserProfile.avatar}`"></v-img>
          </v-avatar>
        </div> </v-card
    ></v-col>
  </v-container>
</template>

<script setup>
import router from "@/router";
import NavBar from "@/components/Reusables/NavBar.vue";
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
  } catch (error) {
    console.log(error);
  }
}
get();


const displayUserProfile = computed(() => {
  if (activeUserProfile.value) {
    return activeUserProfile.value;
  } else {
    return "Loading...";
  }
});

function editProfile(){
    localStorage.setItem("editProfileId",activeUserProfile.value.id );
    router.replace("/edit-profile")
}
</script>

<style scoped>
</style>