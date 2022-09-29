import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import settingsService from "./userService";

const initialState = {
  userDetails: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getUserDetails = createAsyncThunk(
  "settings/getUserDetails",
  async (stringblock, thunkAPI) => {
    try {
      return await settingsService.getUserDetails(stringblock);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Got user profile";
        console.log(action)
        state.userDetails = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message =
          action.payload?.response?.data?.errors?.msg ||
          action.payload?.message ||
          "Something went wrong!";
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
