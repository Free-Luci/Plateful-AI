import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
let CardImage = new URL('../assets/image1.avif',import.meta.url).href;
export default function SearchByIngredients(){
    let [apiData,setApiData] = useState([]);
    let isDark = useSelector((state)=>state.isDark.isDark);
    let [text,setText] = useState("");
    function decodeIngredients(str){
        let arr = str.split(",");
        let ans = "";
        for(let i = 0;i<arr.length;i++){
            if(i==arr.length-1){
               ans += arr[i];
            }else{
               ans += arr[i];
               ans += ",+";
            }
        }
        if(str.length>2)
        setText(ans);
    }
    useEffect(()=>{
      async function getApi(){
         let Api = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${text}&number=8&apiKey=${process.env.SPOONACULAR_API_KEY}`);
         let data = await Api.json();
         setApiData(data);
         console.log(data);
        }
        getApi();
    },[text])
    return(
       <>
      <div className={`${isDark?'bg-gray-800':'bg-gray-200'} h-screen`}>
       <div className={`${isDark?'bg-gray-800':'bg-gray-200'} pt-24 flex flex-col gap-3 h-screen`}>
         <div className="lg:mx-24 mx-5 flex justify-center items-center">
          <div className="rounded-2x">
           <input className="h-10 sm:w-100 px-4 py-2 rounded-xl bg-white text-gray-600" onChange={(e)=>decodeIngredients(e.target.value)} type="text" placeholder="Ingredients Comma (,) Saparated..." maxLength={50} />
          </div>
        </div>
        <div className="lg:w-[60%] w-[90%] rounded-2xl overflow-scroll bg-white h-screen mx-auto">
            <div className="w-[100%] py-3 flex overflow-scroll justify-center items-center flex-wrap gap-1">
                {
                  apiData?.map((obj)=>{
                    return(
                    <div key={obj?.id} className="w-80 bg-white border-2 border-black dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-95 duration-200 hover:shadow-2xl">
                      <img
                      src={obj?.image || CardImage}
                      alt={obj?.title}
                      className="h-48 w-full object-cover rounded-t-2xl"
                      onError={(e) => (e.target.src = CardImage)}
                      />
                     <div className="my-2 mx-2 border-1 border-black rounded-xl">
                     <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                           {obj?.title}
                         </h2>
                    </div>
                      <div className="text-center my-2">
                       <Link to={'/InformationPage/'+obj?.id} className="px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition">
                       View Recipe
                       </Link>
                    </div>
                     </div>
                       </div>
                     )
                  })
                }
            </div>
        </div>
       </div>
      </div>
       </>
    );
}