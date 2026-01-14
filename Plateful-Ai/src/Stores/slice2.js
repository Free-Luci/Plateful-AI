import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: 'CountRecipe',
    initialState: {
      count : 0,
      recipeArr:[],
    },
    reducers: {
      Add: (state,action) => {
        let {obj} = action.payload;
        let exists = state.recipeArr.some(item => item.id === obj.id)
        if(!exists){
        state.recipeArr.push(obj);
        state.count += 1;
       }
      },
      Remove:(state,action)=>{
        let newArr = state.recipeArr.filter((obj)=>obj.id!==action.payload);
        state.recipeArr = newArr;
        state.count -= 1; 
        }
    }
})
export const { Add,Remove } = countSlice.actions;
export default countSlice.reducer;