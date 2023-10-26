<template>
  <NavBar />
  <div class="slot-container">
    <!-- Use the default slot to display content -->
    <slot></slot>
  </div>
  <v-container class="all-products">
    <div
      v-for="(products, index) in activeUserCategory"
      :key="index"
      class="product card"
    >
      <div>
        <v-carousel
          height="150px"
          class="img-width"
          delimiter-icon="mdi-square"
          :continuous="true"
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(img, imgIndex) in products.images"
            :key="imgIndex"
            :src="`${img}`"
            :alt="img"
            cover
          ></v-carousel-item>
        </v-carousel>
        <h3 class="font-weight-medium text-center">{{ products.title }}</h3>
        <p class="price">${{ products.price }}</p>
       
        <p><button @click="userDataFromStore.showProductPage(products)">view more</button></p>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import NavBar from "../components/Reusables/NavBar.vue";

import { ref } from "vue";

import { useAppStore } from "../store/app";

const userDataFromStore = useAppStore();

import axios from "axios";

const mainArr = ref([]);
const activeUserCategory = ref([]);


const limit = ref(25);
const offset = ref(0);

var oldScrollY = window.scrollY;

window.onscroll = function (e) {
  if (oldScrollY < window.scrollY) {
    limit.value += 25;
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

    const activeCategory = JSON.parse(localStorage.getItem("category"));


      activeUserCategory.value = mainArr.value.filter(
        (product) => product.category.id === activeCategory.id
      );
    
  } catch (error) {
    console.log(error);
  }
}
get();
</script>

<style scoped>
.all-products {
  display: flex;
  flex-direction: row !important;
  flex-wrap: wrap;
  gap: 20px;
}

.product {
  width: 40vh;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  font-family: serif;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>