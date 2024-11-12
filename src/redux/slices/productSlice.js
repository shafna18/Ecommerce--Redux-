import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
});

const initialState = {
  products: [], 
  loading: true,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        
        state.error = action.error.message;
      });
    
  },
});

export const { fetchProductsPending, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;

