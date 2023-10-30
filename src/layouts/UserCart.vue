<template>
  <NavBar />
  <div class="mt-3">
    <v-col
      cols="12"
      v-for="(product, cartProductIndex) in cartArr"
      :key="cartProductIndex"
    >
      <v-card color="#1F7087" theme="dark">
        <div class="d-flex flex-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5"> {{ product.title }} 
              <v-btn class="ms-2" variant="outlined" size="small">
                <v-icon>mdi-delete-forever</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-subtitle>{{ product.category.name }}
             
            </v-card-subtitle>
            
            <v-card-text>
              <div>${{ product.price }}</div>
              <div>{{ product.description }}</div>
            </v-card-text>
           
            <v-card-actions>
             
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