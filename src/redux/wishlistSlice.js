import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // actions
        // updating state, action= parameter used to define the argument of addToWishlist fn
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
                //id
                removeWishlist:(state,action) =>{
                    // return cos new filtered array not to existing one
                    return state.filter(i=>i.id!=action.payload)
                }       
    }
})

// export reducer 
export default wishlistSlice.reducer

// export action
export const {addToWishlist,removeWishlist}=wishlistSlice.actions