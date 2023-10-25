<template>
  <v-form ref="form">
    <v-row>
      <v-col cols="12" md="4" sm="4">
        <v-text-field
          class="custom-input"
          v-model="user.name"
          required
          variant="underlined"
          label="First name *"
          :rules="nameRules"
        />
      </v-col>
      <v-col cols="12" md="4" sm="4">
        <v-text-field
          class="custom-input"
          v-model="user.email"
          required
          variant="underlined"
          label="Email *"
          :rules="emailRules"
        />
      </v-col>
      <v-col cols="12" md="4" sm="4">
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
      <v-col cols="12" md="4" sm="4">
        <v-select
          v-model="user.role"
          variant="underlined"
          :items="items"
          :rules="selectionRules"
          label="Role"
          persistent-hint
        ></v-select>
      </v-col>
      <v-col cols="12" md="4" sm="4">
        <v-text-field
          variant="underlined"
          label="Upload Image link"
          v-model="user.avatar"
          :rules="imageLinkRule"
        />
      </v-col>
      
      <v-col cols="12" md="4" sm="4" v-if="editIndex >= 0 && editIndex != null">
        <v-btn variant="outlined" @click="updateProfile()"
          >update profile</v-btn
        >
      </v-col>
      <v-col cols="12" md="4" sm="4" v-else>
        <v-btn variant="outlined" @click="submitUser()">submit</v-btn>
      </v-col>
      <v-col cols="12" md="4" sm="4"> </v-col>
    </v-row>
  </v-form>

  <v-snackbar v-model="snackbar" multi-line> {{ text }} </v-snackbar>
</template>



<script setup>
import { reactive, ref } from "vue";

import { nameRules } from "../components/utils/validationUtils";
import { imageLinkRule } from "../components/utils/validationUtils";
import { emailRules } from "../components/utils/validationUtils";
import { passwordRules } from "../components/utils/validationUtils";

import router from "@/router";

import axios from "axios";
const form = ref(null);
let user = reactive({
  name: "",
  email: "",
  password: "",
  role: "",
  avatar: "",
});
const snackbar = ref(false);
const text = ref("");
const userArr = ref([]);
let activeUserProfile = ref([]);
let items = ["admin", "customer"];
let editIndex = ref(localStorage.getItem("editProfileId"));
const selectionRules = [(v) => v.length > 0 || "required"];

async function get() {
  try {
    const data = await axios.get(
      "https://api.escuelajs.co/api/v1/users?limit=2000"
    );
    userArr.value = await data.data;
    if (localStorage.getItem("editProfileId")) {
      const foundUser = userArr.value.find((user) => user.id === +editIndex.value);
      if (foundUser) {
        (user.name = foundUser.name),
          (user.email = foundUser.email),
          (user.password = foundUser.password),
          (user.role = foundUser.role),
          (user.avatar = foundUser.avatar);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
get();

async function submitUser() {
  let isValid = await form.value.validate();
  if (!isValid.valid) {
    snackbar.value = true;
    text.value = "fill all the fields correctly";
    return;
  }

  const activeUser = user;
  activeUserProfile.value = await userArr.value.find(
    (user) => user.email === activeUser.email
  );
  console.log(activeUserProfile.value);
  if (activeUserProfile.value) {
    snackbar.value = true;
    text.value = "user with this email already exist";

    return;
  }

  try {
    const data = await axios.post(`https://api.escuelajs.co/api/v1/users`, {
      email: user.email,
      name: user.name,
      password: user.password,
      role: user.role,
      avatar: user.avatar,
    });

    router.replace("/");
  } catch (error) {
    console.log(error);
  }
}

async function updateProfile() {
 
  try {
    const data = await axios.put(
      `https://api.escuelajs.co/api/v1/users/${+editIndex.value}`,
      {
        email: user.email,
        name: user.name,
        password: user.password,
        role: user.role,
        avatar: user.avatar,
      }
    );
    localStorage.removeItem("editProfileId");
    router.push("/profile")
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}
</script>
