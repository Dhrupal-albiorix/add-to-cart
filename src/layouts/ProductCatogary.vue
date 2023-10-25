<template>
  <v-container>
    <div v-for="(category, catIndex) in catArr" :key="catIndex">
      {{ category.name }}
      <img :src="`${category.image}`" alt="img" class="img"/>
    </div>
  </v-container>
</template>

<script setup>
import router from "@/router";
import NavBar from "@/components/Reusables/NavBar.vue";
import axios from "axios";
import { ref } from "vue";
const catArr = ref([]);

async function get() {
  try {
    const data = await axios.get(
      "https://api.escuelajs.co/api/v1/categories?limit=10000"
    );
    catArr.value = await data.data;
    console.log(catArr.value);
  } catch (error) {
    console.log(error);
  }
}
get();
</script>

<style scoped>
.img{
    width: 200px;
    height: 200px;
}
</style>