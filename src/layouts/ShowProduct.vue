<template>
  <v-container>
    <CategoryPage>
      <div class="product card">
        <v-carousel
          height="150px"
          class="img-width"
          delimiter-icon="mdi-square"
          :continuous="true"
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(img, imgIndex) in showProduct.images"
            :key="imgIndex"
            :src="`${img}`"
            :alt="img"
            cover
          ></v-carousel-item>
        </v-carousel>
        <h3 class="font-weight-medium text-center">{{ showProduct.title }}</h3>
        <p class="price">${{ showProduct.price }}</p>
        <div>
          {{ showProduct.description }}
        </div>
        <div>
          {{ showProduct.category.name }}
        </div>
        <div>
          <img :src="`${showProduct.category.image}`" alt="" class="img" />
        </div>
        <div>
          <v-btn @click="userDataFromStore.addToCart(showProduct)"
            >Add to cart</v-btn
          >
        </div>
      </div>

      <div>other categories :</div>
    </CategoryPage>
  </v-container>
</template>

<script setup>
import { useAppStore } from "../store/app";

const userDataFromStore = useAppStore();
import CategoryPage from "./CategoryPage.vue";
import { ref, computed } from "vue";

// Initialize showProduct with the value from localStorage
let showProduct = ref(JSON.parse(localStorage.getItem("showProduct")));
</script>

<style scoped>
.product {
  width: 60vh;
}

.img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.card {
  box-shadow: 0 14px 8px 20px rgba(0, 0, 0, 0.2);
  margin: auto;
  padding: 20px;
  text-align: center;
  font-family: serif;
  border-radius: 20px;
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