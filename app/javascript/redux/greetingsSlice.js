import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  greetings: [],
  loading: false,
};

const greetingsSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {
    setGreetings: (state, action) => {
      state.greetings = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setGreetings, setLoading } = greetingsSlice.actions;

export const fetchGreetings = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch("http://localhost:3000/api/greetings");
    const data = await res.json();
    dispatch(setGreetings(data));
    dispatch(setLoading(true));
  } catch (error) {
    console.error(error);
    dispatch(setLoading(false));
  }
};

export default greetingsSlice.reducer;
