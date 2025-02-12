import { createSlice } from "@reduxjs/toolkit";
import usersData from "../../utils/data.json"; // Load users from JSON file

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email } = action.payload;

      // Search in JSON data for user
      const foundUser = Object.values(usersData.users)
        .flat() // Flatten admins, sellers, buyers into a single array
        .find((user) => user.email === email);

      if (foundUser) {
        state.user = foundUser;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Invalid email!";
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    signup: (state, action) => {
      const { username, email, role } = action.payload;

      // Create new user structure
      const newUser = { id: `user_${Date.now()}`, username, email, role };

      // Add user to JSON structure dynamically (Normally, you'd use an API)
      usersData.users[role + "s"].push(newUser); 

      state.user = newUser;
      state.isAuthenticated = true;
      state.error = null;
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
