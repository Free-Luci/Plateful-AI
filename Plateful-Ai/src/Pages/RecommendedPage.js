import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import RecommendedCard from "../utils/RecommendedCard";
import Shimmer from "../utils/Shimmer";
import SearchByRecipe from "../utils/SearchByRecipe";
export default function RecommendedPage() {
    let [RecData,setRecData] = useState([]);
    let isDark = useSelector((state)=>state.isDark.isDark);
    useEffect(()=>{
        async function getApi() {
            let Api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=indian&diet=vegetarian&number=12&apiKey=${process.env.SPOONACULAR_API_KEY}`);
            let data = await Api.json();
            setRecData(data?.results);
            console.log(data)
        }
        getApi();
    },[])
    return(
        <>
        <div className={`h-full py-4 ${isDark ? 'bg-gray-900' : 'bg-gray-200'} pt-24`}>
          <div className="md:mx-25 mx-5 text-center">
            <div className="text-center flex justify-center items-center">
              <div className={`md:text-6xl text-3xl text-center pt-8 font-bold flex ${isDark ? 'text-white' : 'text-black'}`}>Recommended Recipes</div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <Link to={'/SearchByRecipe'} className="sm:text-2xl text-xl text-gray-600 py-2 sm:px-20 px-10 bg-gray-100 rounded-xl">Search More Recipes</Link>
            </div> 
            <div className="flex flex-wrap justify-center items-center gap-10 my-10">
                {
                    RecData?.length===0?<Shimmer/>
                    :
                    RecData?.map((obj)=>{
                      return(
                        <RecommendedCard key={obj.id} obj={obj}/>
                      );
                    })
                }
            </div> 
          </div>
        </div>
        </>
    );
}