<template>
    <div class="sign-up-form">
      <v-container>
    <keep-alive>
      <component :is="tab[activeStep]" />
    </keep-alive>
    <v-row>
      <v-col v-if="activeStep === 'LogIn'" cols="12" md="6" sm="6">
        <br> <br>
        <span>Don't have account ? </span>
        <v-btn variant="outlined" @click="activeStep = 'SignUP'">SignUP</v-btn></v-col
      >
      <v-col v-if="activeStep === 'SignUP' && !( editIndex >= 0 && editIndex != null)" cols="12" md="6" sm="6" >
      <span>already have account ? </span> 
        <v-btn variant="outlined" @click="activeStep = 'LogIn'">Login</v-btn></v-col
      >
    </v-row>

  

  </v-container>
    </div>
  
</template>

<script setup>
import { ref } from "vue";
import SignUP from "./SignUP.vue";
import LogIn from "./LogIn.vue";
let editIndex = localStorage.getItem("editProfileId");
const activeStep = ref("SignUP"); // Set a default activeStep

const tab = {
  SignUP: SignUP,
  LogIn: LogIn,
};


</script>

<style scoped>
.sign-up-form {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(32, 16, 16, 0.454));
  min-height: 100vh;
  position: relative;
}

</style>