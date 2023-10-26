// Utilities
import router from "@/router";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    cartArr: JSON.parse(localStorage.getItem("cartProducts")) || [],
    productView :localStorage.getItem("showProduct")
  }),

  actions: {
    showProductPage(products, mainArr) {
      localStorage.setItem("showProduct", JSON.stringify(products));
      console.log(localStorage.getItem("showProduct"));
      this.productView = localStorage.getItem("showProduct")
      router.push("/show-product");
    },
  },
});
