import { useDispatch, useSelector } from "react-redux";
import { Remove } from "../Stores/slice2";
import { useEffect } from "react";
import { Link } from "react-router";
import InformationPage from "../Pages/InformationPage";
export default function FavRecipe(){
    let arr = useSelector((state)=>state.CountRecipe.recipeArr);
    let count = useSelector((state)=>state.CountRecipe.count);
    let isDark = useSelector((state)=>state.isDark.isDark);
    let dispatch = useDispatch();
    function removeRecipe(id){
        dispatch(Remove(id));
        arr = arr.filter((obj)=>obj.id!=id);
    }
    return(
        <>
        <div className={`h-100% text-center flex flex-col ${isDark?'bg-gray-800':'bg-gray-200'}`}>
        <div className={`sm:text-6xl text-3xl font-semibold ${isDark?'text-white':'text-black'} mt-20`}>My Recipes</div>
        <div className="rounded-2xl sm:w-[60%] w-[80%] bg-white px-2 py-2 flex gap-2 flex-col mx-auto my-20">

        { 
            count>0?
            arr.map((obj)=>{
               return(
                 <div key={obj.id} className={`h-55 border-1 border-gray-400 rounded-2xl pt-24 flex flex-col py-1 pt-0.5 px-1 ${isDark?'text-white':'text-black'} justify-center items-center`}>
                  <div className="w-[100%] text-center flex rounded-2xl gap-3 justify-between items-center">
                     <div className="p-2 rounded-xl">
                        <img className="md:h-30 md:self-auto h-20 w-40 rounded-xl" src={obj?.image}/>
                     </div>
                     <div className="flex justify-center items-center gap-1">
                     <div className={`w-3 h-3 rounded-full ${Boolean(obj?.vegetarian) === true ? 'bg-green-500' : 'bg-red-500'}`}/>
                        <div>{Boolean(obj?.vegetarian)?'Veg':'Non-Veg'}</div>
                     </div>
                     <div className="text-center md:w-80 md:text-none text-xs">
                       {obj?.title}
                     </div>
                  </div>
                  <div className="w-[100%] mb-1">
                  <Link to={'/InformationPage/'+obj?.id} className="sm:text-2xl text-xl text-white font-bold bg-green-500 rounded-xl w-[100%] py-1 px-4">View Recipe</Link>
                  </div>
                  <div className="w-[100%] mt-1">
                    <button onClick={()=>{removeRecipe(obj?.id)}} className="sm:text-2xl text-xl text-white font-bold bg-red-500 rounded-xl w-[100%] py-1 px-1">Remove</button>
                  </div>
                  </div>
               );
            })
          :
          <div className={`text-2xl text-black font-bold`}>No Favorite Recipes!</div>
        }
          </div>
        </div>
        </>
    );
}