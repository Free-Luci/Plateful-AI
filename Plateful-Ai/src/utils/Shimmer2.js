export default function Shimmer2(){
    return(
        <>
        <div>
        <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-32 my-10">
     <div className="w-full h-64 animate-pulse bg-gray-300 rounded-2xl"></div>
     <div className="flex flex-col md:flex-row justify-between my-6 gap-4 items-center">
      <div className="bg-gray-300 animate-pulse w-full md:w-[48%] h-80 md:h-[500px] rounded-2xl"></div>
      <div className="bg-gray-300 animate-pulse w-full md:w-[48%] h-80 md:h-[500px] rounded-2xl"></div>
     </div>
          </div>
       </div>
        </>
    )
}