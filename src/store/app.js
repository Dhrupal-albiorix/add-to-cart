// Utilities
import router from "@/router";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    cartArr: JSON.parse(localStorage.getItem("cartProducts")) || [],
    productView: localStorage.getItem("showProduct"),
  }),

  actions: {
    showProductPage(products) {
      localStorage.setItem("showProduct", JSON.stringify(products));
      console.log(localStorage.getItem("showProduct"));
      this.productView = localStorage.getItem("showProduct");
      router.push("/show-product");
      console.log(router.options.history.state.back);
      if (
        router.currentRoute.value.fullPath === "/show-product" &&
        router.options.history.state.back === "/"
      ) {
        location.reload();
      }
    },

    addToCart(showProduct) {
      this.cartArr = JSON.parse(localStorage.getItem("cartProducts")) || [];
      const existsInCart = this.cartArr.some(
        (item) => item.id === showProduct.id
      );
      if (existsInCart) return;
      this.cartArr.push(showProduct);
      localStorage.setItem("cartProducts", JSON.stringify(this.cartArr));
    },

    increaseQuantity(showProduct) {
      console.log(showProduct);
      this.cartArr = JSON.parse(localStorage.getItem("cartProducts")) || [];
      const productIndex = this.cartArr.findIndex(item => item.id === showProduct.id);
      if (productIndex !== -1) {
        this.cartArr[productIndex].Quantity += 1;
        this.cartArr[productIndex].price += this.cartArr[productIndex].price;
      }
      localStorage.setItem("cartProducts", JSON.stringify(this.cartArr));
    }
    
  },
});
