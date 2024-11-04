import { createSlice } from "@reduxjs/toolkit";

 const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    
    },
    
    reducers:{
        addToCart:(state,action)=>{
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1; 
            }
        },

        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; 
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload); 
                }
            }
        },

    
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        resetCart(state) {
            state.items = []; 
        }
    }
});

export const selectCartCount = (state) => state.cart.items.length;
export const { addToCart,removeFromCart,increaseQuantity,decreaseQuantity,resetCart } = cartSlice.actions;
export default cartSlice.reducer