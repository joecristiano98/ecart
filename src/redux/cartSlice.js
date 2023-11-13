import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // actions
        // updating state, action= parameter used to define the argument of addToCart fn
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
                //id
        removeCart:(state,action) =>{
            // return cos new filtered array not to existing one
            return state.filter(i=>i.id!=action.payload)
        },
        clearCart:(state)=>{
            return[]
        }   
    }
})

// export reducer 
export default cartSlice.reducer

// export action
export const {addToCart,removeCart,clearCart}=cartSlice.actions