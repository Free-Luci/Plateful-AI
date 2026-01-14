import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './src/Pages/home';
import { Provider } from 'react-redux'
import store from './src/Stores/store';
import Main from './Main';
import Home from './src/Pages/home';
import InformationPage from './src/Pages/InformationPage';
import { BrowserRouter,Route,Routes } from 'react-router';
import RecommendedPage from './src/Pages/RecommendedPage';
import ScrollToTop from './src/utils/ScrollToTop';
import FavRecipe from './src/utils/FavRecipe';
import SearchByRecipe from './src/utils/SearchByRecipe';
import SearchByIngredients from './src/utils/SearchByIngredients';
function App(){
    return(
        <Provider store={store}>
          <ScrollToTop/>
         <Routes>
         <Route path="/" element={<Main/>}>
         <Route index element={<Home/>}/>
         <Route path={'/RecommendedPage'} element={<RecommendedPage/>}/>
         <Route path={'/InformationPage/:id'} element={<InformationPage/>}/>
         <Route path={'/FavoriteRecipes'} element={<FavRecipe/>}/>
         <Route path={'/SearchByRecipe'} element={<SearchByRecipe/>}/>
         <Route path={'/SearchByIngredients'} element={<SearchByIngredients/>}/>
         </Route>
         </Routes>
        </Provider>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);