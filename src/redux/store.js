import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlice';
import productReducer from '../redux/slices/productSlice';
import categoryReducer from '../redux/slices/categorySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
  },

});

export default store;
