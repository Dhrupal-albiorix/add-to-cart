<template>
  <div>
    <div v-for="(products, index) in mainArr" :key="index">
      <div>price : {{ products.price }}</div>

      <div>title :{{ products.title }}</div>

      <div>des : {{ products.description }}</div>

      <div>img : {{ products.images }}</div>

      <div>cat : {{ products.category }}</div> 
    </div>

   
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const mainArr = ref([]);

const limit = ref(25);
const offset = ref(0);

var oldScrollY = window.scrollY;

window.onscroll = function (e) {
  if (oldScrollY < window.scrollY) {
    limit.value += 25;
    console.log(limit.value);
    get();
  } else {
    limit.value -= 25;
    get();
  }
  oldScrollY = window.scrollY;
};

async function get() {
  try {
    const data = await axios.get(
      `https://api.escuelajs.co/api/v1/products?limit=${limit.value}&offset=${offset.value}`
    );
    mainArr.value = await data.data;
  } catch (error) {
    snackbar.value = true;
    errMsg.value = error;
  }
}
get();
</script>

<style></style>
