import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    message: '',
  },
  successMessage: '',
  errorMessage: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.successMessage = '';
      state.errorMessage = '';
    },
  },
});

export const { setFormData, setSuccessMessage, setErrorMessage, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
