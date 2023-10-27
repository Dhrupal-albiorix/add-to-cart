<template>
  <NavBar />
  <div>
    <v-col
      cols="12"
      v-for="(product, cartProductIndex) in cartArr"
      :key="cartProductIndex"
    >
      <v-card color="#1F7087" theme="dark">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5"> {{ product.title }} </v-card-title>

            <v-card-subtitle>{{ product.description }}</v-card-subtitle>

            <v-card-subtitle>{{ product.category.name }}</v-card-subtitle>

            <v-card-actions>
              <v-btn class="ms-2" variant="outlined" size="small"> Add </v-btn>
              <v-btn class="ms-2" variant="outlined" size="small">
                remove
              </v-btn>
              <v-btn class="ms-2" variant="outlined" size="small">
                delete
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="`${product.images[1]}`"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </div>
</template>

<script setup>
import NavBar from "../components/Reusables/NavBar.vue";
const cartArr = JSON.parse(localStorage.getItem("cartProducts"));
</script>

<style>
</style>