import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../components/products";

const initialState: Product[] = [];

const ProductSlice = createSlice({
  name: "product",
  initialState: { data: initialState },
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      let index = state.data.findIndex((el) => el.id == action.payload.id);
      if (index > -1) {
        state.data.splice(index, 1);
      } else {
        state.data = [action.payload, ...state.data];
      }
    },
  },
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
