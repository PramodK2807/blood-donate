import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
    totalCount: 0,
  },
  reducers: {
    setUser(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    setLogout(state, action) {
      state.isLoggedIn = false;
      state.user = null;
    },
    setTotalCount(state, action) {
      console.log(action.payload)
      state.totalCount = action.payload;
    },
  },
});
export const { setUser, setLogout, setTotalCount } = userSlice.actions;
export default userSlice.reducer;
