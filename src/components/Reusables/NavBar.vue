<template>
  <v-app>
    <v-app-bar app color="deep-black accent-4" dark dense>
      <v-app-bar-nav-icon> </v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-icon>mdi-store</v-icon>
        <sub class="text-grey">ShopLines</sub>
    </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <form action="#" method="get">
            <input type="text" name="search" maxlength="60" placeholder="Search..." required>
            <button type="submit"> <v-icon>mdi-magnify</v-icon></button>
        </form>
       
    </div>

    <router-link to="/sign-up"><v-btn icon > 
        <v-icon> mdi-heart </v-icon> </v-btn>
    </router-link>
      
     
      <v-menu left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
  </v-app>
</template>

<script scoped>
</script>

<style>
.v-application__wrap {
  min-height: 10vh !important;
}
</style>