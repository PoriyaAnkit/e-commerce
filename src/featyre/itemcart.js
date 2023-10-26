import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cart: [],
    subtotal:0,

}
export const itemcart = createSlice({
    name: "cart",
    initialState,
    reducers:
    {
        addToCart(state, action) {

            const itemindex = state.cart.filter(
                (item) => item.id === action.payload.id
            
            );
            if(itemindex.length > 0)
            {
                itemindex[0].qty += 1;
                itemindex[0].total = itemindex[0].qty * itemindex[0].price;
                state.subtotal += itemindex[0].price
                // itemindex[0].subtotal = itemindex[0].total * itemindex[0].qty
            }
            else
            {
               state.cart.push(action.payload);
               action.payload.qty = parseInt(1)
               action.payload.total = parseInt(action.payload.price)
               state.subtotal += parseInt(action.payload.total)
               console.log(state.subtotal);
            }

            console.log(itemindex);
            // action.payload.qty = 1;
            // // console.log(action.payload);
            // action.payload.total = parseInt(action.payload.price) * parseInt(action.payload.qty)
            // state.cart.push(action.payload)
        },
        increment: (state, action) => {
            state.cart[action.payload].qty = parseInt(state.cart[action.payload].qty) + 1
            state.cart[action.payload].total = parseInt(state.cart[action.payload].price) * state.cart[action.payload].qty
            state.subtotal += state.cart[action.payload].price
        },
        decrement: (state, action) => {
            state.cart[action.payload].qty = parseInt(state.cart[action.payload].qty) - 1
            state.cart[action.payload].total = parseInt(state.cart[action.payload].price) * state.cart[action.payload].qty
            state.subtotal += parseInt(state.cart[action.payload].price)
        },
        removeCart(state,action){
            const clearcart = state.cart.filter(
                (item) => item.id !== action.payload
            )
            // console.log(action.payload.id);
            state.cart = clearcart;
        }

    }
})

export const { addToCart, increment, decrement ,removeCart } = itemcart.actions

export default itemcart.reducer