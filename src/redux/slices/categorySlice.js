import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories', 
  async () => {
    const response = await fetch ('https://fakestoreapi.com/products/categories');
    const data =await response.json();
    return data;
  }
);


const initialState = {
  categories: [],  
  loading: true,
  error: null,
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.map((category , index )=>({
          id : index,
          name : category,
        }));
       })
      builder.addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;  
      });
  },
});

export default categorySlice.reducer;
