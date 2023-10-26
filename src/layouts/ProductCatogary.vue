<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
    class="mt-3"
  >
    <v-carousel-item v-for="(category, catIndex) in catArr" :key="catIndex">
      <v-sheet height="100%">
        <div
          class="d-flex fill-height justify-center align-center"
          :style="{
            'background-image': `url(${category.image})`,
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center',
          }"
        >
          <v-btn
            rounded="xl"
            variant="outlined"
            density="comfortable"
            class="btn"
            size="x-large"
            @click="viewCategory(category)"
          >
            explore {{ category.name }}</v-btn
          >
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import router from "@/router";

import axios from "axios";
import { ref } from "vue";
const catArr = ref([]);


async function get() {
  try {
    const data = await axios.get(
      "https://api.escuelajs.co/api/v1/categories?limit=10000"
    );
    catArr.value = await data.data;
  } catch (error) {
    console.log(error);
  }
}
get();

function viewCategory(category) {
  localStorage.setItem("category", JSON.stringify(category));
  router.push("/category")
}
</script>

<style scoped>
.btn {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.986),
    rgba(32, 16, 16, 0.087)
  );
  border-color: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.986),
    rgba(32, 16, 16, 0.087)
  );
  z-index: 1000000;
  box-shadow: -20px 20px 40px 40px rgba(17, 151, 137, 0.47);
}
</style>
