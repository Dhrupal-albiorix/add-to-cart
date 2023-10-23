<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="3" sm="2">
          <v-text-field
            class="custom-input"
            v-model="user.name"
            required
            variant="underlined"
            label="First name *"
            :rules="nameRules"
          />
        </v-col>
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
        <v-col cols="12" md="3" sm="2">
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
        <v-col cols="12" md="3" sm="2">
          <v-text-field
            v-model="user.role"
            :rules="dateRules"
            required
            variant="underlined"
            label="Role *"
          />
        </v-col>
        <v-col cols="12" md="3" sm="2">
          <v-text-field
            
            variant="underlined"
            label="Upload Image link"
           v-model="user.avatar"
          />
        </v-col>
    
      </v-row>

      <v-row>
        <v-col cols="12" md="3" sm="2"> </v-col>
        <v-col cols="12" md="3" sm="2">
          <v-btn @click="submitUser()">submit</v-btn>
        </v-col>
        <v-col cols="12" md="3" sm="2"> </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>



<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

const user = reactive({
  name: "",
  email: "",
  password: "",
  role: "",
  avatar:""
});

async function submitUser() {

  try {
    const data = await axios.post(
      `https://api.escuelajs.co/api/v1/users`,
      {
        email: user.email,
        name: user.name,
        password: user.password,
        role: user.role,
        avatar: user.avatar,
      }
    );

    console.log(data.data)
  } catch (error) {
    console.log(error)
  }
}
</script>

