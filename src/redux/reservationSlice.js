import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    formData: { date: "", time: "", guests: "" },
    successMessage: "",
    errorMessage: "",
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    clearMessages: (state) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
});

export const { updateFormData, setSuccessMessage, setErrorMessage, clearMessages } =
  reservationSlice.actions;
export default reservationSlice.reducer;
