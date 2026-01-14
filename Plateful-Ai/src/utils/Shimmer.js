export default function Shimmer(){
    let arr = [1,2,3,4,5,6,7,8,9,10];
    return(
        <>
        {
            arr.map((elem)=>{
               return(
                <div 
                 key={elem} 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col gap-1 border border-gray-300 rounded-2xl transform transition duration-200 hover:scale-95"
                   >
                  <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-300 animate-pulse rounded-2xl"></div>
                    <div className="w-full h-5 bg-gray-300 animate-pulse rounded-xl"></div>
                  <div className="w-full h-5 bg-gray-300 animate-pulse rounded-xl"></div>
                 <div className="w-full h-5 bg-gray-300 animate-pulse rounded-xl"></div>
                 </div>

               )
            })
        }
        </>
    )
}