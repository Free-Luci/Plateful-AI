import InformationPage from '../Pages/InformationPage';
import { useNavigate,Link } from 'react-router';
let CardImage = new URL('../assets/image1.avif',import.meta.url).href;
export default function RecommendedCard({obj}){
  const fallbackImage = CardImage;
  let Navigate = useNavigate();
  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
  {/* Image Section */}
  <img
    src={obj?.image || fallbackImage}
    alt={obj?.title || "Recipe"}
    className="h-48 w-full object-cover rounded-t-2xl"
    onError={(e) => (e.target.src = fallbackImage)}
  />

  {/* Content Section */}
  <div className="p-4 flex flex-col justify-between h-full">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 text-center truncate">
      {obj?.title || "Untitled Recipe"}
    </h2>

    <div className="mt-4 flex justify-center">
      <Link
        to={`/InformationPage/${obj?.id}`}
        className="px-4 py-2 bg-green-500 text-white text-sm sm:text-base rounded-xl hover:bg-green-600 active:scale-95 transition duration-200"
      >
        View Recipe
      </Link>
    </div>
  </div>
</div>

  );
}