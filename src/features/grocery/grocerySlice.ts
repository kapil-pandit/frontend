import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGroceries = createAsyncThunk('grocery/fetchAll', async () => {
  const response = await axios.get('http://localhost:5000/grocery');
  return response.data;
});

interface Grocery {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface GroceryState {
  groceries: Grocery[];
  loading: boolean;
}

const initialState: GroceryState = {
  groceries: [],
  loading: false,
};

const grocerySlice = createSlice({
  name: 'grocery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroceries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGroceries.fulfilled, (state, action) => {
        state.groceries = action.payload;
        state.loading = false;
      });
  },
});

export default grocerySlice.reducer;
