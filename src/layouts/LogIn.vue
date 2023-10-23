<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="3" sm="2"> </v-col>
        <v-col cols="12" md="3" sm="2">
          <v-text-field
            class="custom-input"
            v-model="user.email"
            required
            variant="underlined"
            label="Email *"
            :rules="emailRules"
          />
        </v-col>
        <v-col cols="12" md="3" sm="2"> </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" sm="2"> </v-col>
        <v-col cols="12" md="3" sm="2">
          <v-text-field
            v-model="user.password"
            required
            variant="underlined"
            label="password"
            :rules="passwordRules"
          />
        </v-col>
        <v-col cols="12" md="3" sm="2"> </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="3" sm="2"> </v-col>
        <v-col cols="12" md="3" sm="2">
          <v-btn @click="logInUser()">submit</v-btn>
        </v-col>
        <v-col cols="12" md="3" sm="2"> </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import router from "@/router";

const user = reactive({
  email: "",
  password: "",
});

async function logInUser() {
  try {
    const data = await axios.post(
      `https://api.escuelajs.co/api/v1/auth/login`,
      {
        email: user.email,
        password: user.password,
      }
    );
    router.replace("/");
   
  } catch (error) {
    console.log(error);
  }
}
</script>

<style></style>
