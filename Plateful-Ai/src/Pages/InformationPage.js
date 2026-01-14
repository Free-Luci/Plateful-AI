import { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmer2 from "../utils/Shimmer2";
import { useDispatch } from "react-redux";
import {Add} from '../Stores/slice2';
let CardImage = new URL('../assets/image1.avif',import.meta.url).href;
export default function InformationPage(){
    let isDark = useSelector((state)=>state.isDark.isDark);
    let dispatch = useDispatch();
    let {id} = useParams();
    let isSaved = useSelector((state)=>state.CountRecipe.recipeArr).some((item)=>item.id==id);
    let [infoData,setInfoData] = useState({});
    let splitedTitle = splitTheStr(infoData?.title||"");
    function addRecipe(){
      dispatch(Add({obj:infoData}));
    }
    function splitTheStr(title){
      if(title==="")return "";
      let ans = "";
      for(let i = 0;i<title.length;i++){
        let currChar = title.charAt(i);
         if(currChar!=' '){
            ans += currChar;
         }else{
             ans += '+';
         }
      }
      return ans;
    }
    useEffect(()=>{
        async function getApi() {
            let Api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`);
            let data = await Api.json();
            setInfoData(data);
            console.log(data);
        }
        getApi();
    },[id]);
    return (
      <div>
      <div id="top" className="w-full"></div>
      {Object.keys(infoData).length === 0?<Shimmer2/>
       :
        <div className={`min-h-screen ${isDark?'bg-gray-800':'bg-gray-50'} py-8 px-4 pt-24 sm:px-6 lg:px-8`}>
          <div className="max-w-7xl mx-auto">
            {/* Image Section */}
            <div className="mb-8 relative group">
              <img
                src={infoData?.image || CardImage}
                onError={(e) => (e.target.src = CardImage)}
                className={`w-200 h-64 md:h-96 object-cover ${isDark?'border-2 border-white':'border-2 border-black'} rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105`}
              />
            </div>
    
            {/* Title and Metadata */}
            <div className="mb-8 space-y-4">
              <h1 className={`text-3xl md:text-4xl font-bold ${isDark?'text-gray-50':'text-gray-900'}`}>{infoData?.title}</h1>
              <div className={`flex flex-col md:flex-row md:items-center gap-6 ${isDark?'text-gray-50':'text-gray-600'}`}>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg">{infoData?.readyInMinutes||45} mins</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${Boolean(infoData?.vegetarian) === true ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-lg capitalize">{Boolean(infoData?.vegetarian)?"Veg":"Non-Veg"}</span>
                </div>
              </div>
            </div>
    
            {/* Ingredients and Instructions Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Ingredients Card */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ingredients</h2>
                <ul className="space-y-3">
                  {infoData?.extendedIngredients?.map((ingredient, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-600">{ingredient?.original}</span>
                    </li>
                  ))}
                </ul>
              </div>
    
              {/* Instructions Card */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
                <div className="space-y-6">
                  {
                  infoData?.analyzedInstructions?.length>0&&infoData?.analyzedInstructions[0]?.steps.length>2?
                  infoData?.analyzedInstructions[0]?.steps?.map((obj, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{obj?.step}</p>
                    </div>
                  ))
                :
                <div className="text-2xl">Not Available
                <p>You Can Search On Google</p>
                <p>Or visit - <Link target="_blank" to={`https://www.allrecipes.com/search?q=${splitedTitle}`} className="text-blue-500">Site</Link></p>
                </div>}
                </div>
              </div>
            </div>
    
            {/* Action Buttons */}
            <div className="mt-8 flex justify-end space-x-4">
              <button 
                className={`${isSaved?'bg-red-500':'bg-green-500'} hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200`}
                onClick={() =>{ 
                  addRecipe();
                }}
              >
                {isSaved?'Saved!':'Save Recipe'}
              </button>
            </div>
          </div>
        </div>}
        </div>
  );
};