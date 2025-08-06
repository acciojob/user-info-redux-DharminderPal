import { createSlice } from "@reduxjs/toolkit";

const initialState ={
name  : "",
email : "",
}

const FormSlice =createSlice({
name: "forms",
initialState,
reducers: {
	username: (state, action) => {
	state.name=action.payload
	},
    email:(state,action)=>{
       state.email=action.payload
    }
}
})

export const {username , email } = FormSlice.actions;
export default  FormSlice.reducer;