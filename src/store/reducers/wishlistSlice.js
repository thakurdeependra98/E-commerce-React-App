import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
  name : "wishlist",
  initialState : {
    items : []
  },
  reducers : {
    addWishlist : (state, action) =>{
      const productExits = state.items.find((item) => item.id === action.payload.id)

      if(!productExits){
        state.items.push(action.payload)
      }
    },
    removeWishlist : (state, action) =>{
      state.items = state.items.filter((item)=> item.id !== action.payload)
    },
  },
});

export const { addWishlist, removeWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;