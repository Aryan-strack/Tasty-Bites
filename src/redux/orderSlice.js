import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  orderType: "takeaway", // Default order type
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const item = action.payload;
      const isSelected = state.selectedItems.some((i) => i.id === item.id);

      if (isSelected) {
        // 🗑 Remove the item if already selected
        state.selectedItems = state.selectedItems.filter((i) => i.id !== item.id);
      } else {
        // ➕ Add the item if not selected
        state.selectedItems.push(item);
      }
    },
    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },
  },
});

export const { toggleItem, setOrderType } = orderSlice.actions;
export default orderSlice.reducer;
