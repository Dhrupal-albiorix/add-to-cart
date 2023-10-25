<template>
 
    <v-form ref="form">
   
      <v-row>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
            class="custom-input"
            v-model="user.email"
            required
            variant="underlined"
            label="Email *"
            :rules="emailRules"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
            v-model="user.password"
            required
            variant="underlined"
            label="password"
            :rules="passwordRules"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" sm="6">
          <v-btn variant="outlined" @click="logInUser()">submit</v-btn>
        </v-col>
      </v-row>
   
  </v-form>

  <v-snackbar v-model="snackbar" multi-line> {{ text }} </v-snackbar>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import router from "@/router";

import { emailRules } from "../components/utils/validationUtils";
import { passwordRules } from "../components/utils/validationUtils";

const form = ref(null);

const snackbar = ref(false);
const text = ref("");

const user = reactive({
  email: "",
  password: "",
});

async function logInUser() {
  let isValid = await form.value.validate();
  if (!isValid.valid) {
    snackbar.value = true;
    text.value = "fill all the fields correctly";
    return
  }
  try {
    const data = await axios.post(
      `https://api.escuelajs.co/api/v1/auth/login`,
      {
        email: user.email,
        password: user.password,
      }
    );

    localStorage.setItem("loggedUser", JSON.stringify(user));

    router.replace("/");
  } catch (error) {
    snackbar.value = true;
    text.value = error.response.data.message;
  }
}
</script>


