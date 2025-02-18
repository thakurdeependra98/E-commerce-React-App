import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../utils/data.json";

const initialState = {
  products: productsData.products || [],
  wishlist: [],
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item._id === product._id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item exists
      } else {
        state.cart.push({ ...product, quantity: 1 }); // Add new item
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter((cartItem) => cartItem._id !== action.payload);
        }
      }
    },
    addWishlist: (state, action) => {
      const product = action.payload;
      if (!state.wishlist.some((item) => item._id === product._id)) {
        state.wishlist.push(product);
      }
    },
    removeWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload);
    },
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.products.push({ ...newProduct, _id: Date.now() }); 
    },
    clearCart: (state) => {
      state.cart = []; 
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  addWishlist, 
  removeWishlist,
  addProduct,
  clearCart
} = productSlice.actions;

export default productSlice.reducer;
