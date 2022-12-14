import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
    name: "productList",
    initialState: [],
    reducers: {
        increment: (state, action) => {
            let target = state.find((item) => item.id === action.payload);
            if (!target) {
                state.push({
                    id: action.payload,
                    amount: 0,
                });
                return;
            }
            target.amount++;
        },
        decrement: (state, action) => {
            let target = state.find((item) => item.id === action.payload);
            if (!target || target.amount === 0) {
                state.push({
                    id: action.payload,
                    amount: 0,
                });
                return;
            }
            target.amount--;
        },
        addProduct: (state, action) => {
            let target = state.find((item) => item.id === action.payload.id);
            if (!target) {
                state.push(action.payload);
                return;
            }
            target.amount += action.payload.amount;
        },
    },
});

export const { increment, decrement, addProduct } = productListSlice.actions;

export default productListSlice.reducer;
