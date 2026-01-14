import { configureStore } from "@reduxjs/toolkit";
import isDarkReducer from './slice1';
import CountRecipeReducer from './slice2';
const store = configureStore({
    reducer: {
        isDark: isDarkReducer,
        CountRecipe: CountRecipeReducer,
    },
});
export default store;