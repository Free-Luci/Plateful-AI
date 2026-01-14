import React from "react";
import { toggleMode } from "../Stores/slice1";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import RecipeOfTheDay from "../utils/RecipeOfTheDay";
import { GiCook, GiFruitTree, GiCookingPot, GiKnifeFork } from "react-icons/gi";
import { FaClock, FaUtensils, FaSearch, FaLeaf } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import AIAssistant from "../AiHandler/AIAssistant";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

let CardImage1 = new URL("../assets/image1.avif", import.meta.url).href;
let CardImage2 = new URL("../assets/image2.jpg", import.meta.url).href;

function Home() {
  let isDark = useSelector((state) => state.isDark.isDark);
  let Navigate = useNavigate();
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const features = [
    {
      icon: <GiFruitTree className="text-4xl" />,
      title: "Fresh Ingredients",
      description:
        "Make the most of what you have with recipes tailored to your fridge contents",
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Quick & Easy",
      description:
        "Find recipes that fit your schedule with smart cooking time filters",
    },
    {
      icon: <GiKnifeFork className="text-4xl" />,
      title: "Simple Steps",
      description:
        "Follow clear, step-by-step instructions perfect for all skill levels",
    },
  ];

  const popularCategories = [
    {
      name: "Quick Meals",
      count: "15-30 min",
      color: "from-green-500 to-emerald-600",
      icon: <FaClock />,
    },
    {
      name: "Healthy Choices",
      count: "Low Calorie",
      color: "from-blue-500 to-cyan-600",
      icon: <FaLeaf />,
    },
    {
      name: "Comfort Food",
      count: "Family Favorite",
      color: "from-orange-500 to-red-500",
      icon: <IoFastFood />,
    },
    {
      name: "Desserts",
      count: "Sweet Treats",
      color: "from-pink-500 to-rose-600",
      icon: <GiCookingPot />,
    },
  ];

  return (
    <>
      <div
        className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"} pt-5`}
      >
        {/* Hero Section */}
        <section
          className={`relative py-16 md:py-24 ${
            isDark ? "bg-gray-800" : "bg-white"
          } overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                <GiCook className="h-12 w-12 mr-3 text-amber-500 animate-pulse" />
                <h1
                  className={`text-5xl md:text-7xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Fridge
                  <span className="text-amber-600 animate-pulse">Buddy</span>
                </h1>
              </div>
              <p
                className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Transform your fridge ingredients into delicious meals with
                AI-powered recipe suggestions
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div
                  className={`relative flex flex-wrap justify-center items-center rounded-2xl shadow-lg ${
                    isDark ? "bg-gray-700" : "bg-white"
                  } p-2`}
                >
                  <div
                    className={`flex justify-between sm:text-base text-sm py-4 px-6 rounded-xl border-0 focus:ring-2 focus:ring-amber-500 ${
                      isDark
                        ? "bg-gray-600 text-white"
                        : "bg-gray-50 text-gray-900"
                    }`}
                  >
                    What ingredients do you have? Try 'chicken, rice, broccoli
                  </div>
                  <div>
                  <button
                    onClick={() => Navigate("/RecommendedPage")}
                    className="right-3 top-3 bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    <FaSearch />
                    Find Recipes
                  </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              {/* Recipe Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div
                  className={`text-center p-4 rounded-2xl ${
                    isDark ? "bg-gray-700" : "bg-amber-50"
                  }`}
                >
                  <div className="text-2xl font-bold text-amber-600">🍝</div>
                  <div
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Italian
                  </div>
                </div>

                <div
                  className={`text-center p-4 rounded-2xl ${
                    isDark ? "bg-gray-700" : "bg-orange-50"
                  }`}
                >
                  <div className="text-2xl font-bold text-orange-600">🥘</div>
                  <div
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Asian
                  </div>
                </div>

                <div
                  className={`text-center p-4 rounded-2xl ${
                    isDark ? "bg-gray-700" : "bg-green-50"
                  }`}
                >
                  <div className="text-2xl font-bold text-green-600">🥗</div>
                  <div
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Healthy
                  </div>
                </div>

                <div
                  className={`text-center p-4 rounded-2xl ${
                    isDark ? "bg-gray-700" : "bg-blue-50"
                  }`}
                >
                  <div className="text-2xl font-bold text-blue-600">🍰</div>
                  <div
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Desserts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`py-16 ${isDark ? "bg-gray-700" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Why Cook With FridgeBuddy?
              </h2>
              <p
                className={`text-lg ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Smart cooking starts with what you already have
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-white shadow-lg"
                  }`}
                >
                  <div className="flex justify-center mb-6 text-amber-500">
                    {feature.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-4 text-center ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-center ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Actions Section */}
        <section className={`py-16 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Start Your Cooking Journey
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Search Recipes Card */}
              <div
                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={CardImage1}
                    alt="Search Recipes"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Discover New Recipes
                    </h3>
                    <p className="text-gray-200">
                      Browse our curated collection of delicious dishes
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <button
                    onClick={() => Navigate("/RecommendedPage")}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    Explore Recipes
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>

              {/* Recipes By Ingredients Card */}
              <div
                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={CardImage2}
                    alt="Recipes by Ingredients"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Use What You Have
                    </h3>
                    <p className="text-gray-200">
                      Get personalized recipes based on your ingredients
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <button
                    onClick={() => Navigate("SearchByIngredients")}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    Find Recipes
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className={`py-16 ${isDark ? "bg-gray-700" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {popularCategories.map((category, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-br ${category.color}`}
                >
                  <div className="relative z-10">
                    <div className="text-white text-2xl mb-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm">{category.count}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recipe of the Day Section */}
        <section className={`py-16 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RecipeOfTheDay />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-400 to-orange-500">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Cook Smarter?
            </h2>
            <p className="text-amber-100 text-lg mb-8">
              Join thousands of home cooks who save time and reduce food waste
              with FridgeBuddy
            </p>
            <button
              onClick={() => Navigate("/RecommendedPage")}
              className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              <FaUtensils />
              Get Started Today
            </button>
          </div>
        </section>

        <button
          onClick={() => setShowAIAssistant(true)}
          className="fixed bottom-6 right-6 z-40 bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <FaRobot className="text-xl" />
          <span className="absolute -top-10 -left-20 bg-gray-800 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            AI Assistant
          </span>
        </button>

        {/* AI Assistant Modal */}
        {showAIAssistant && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl max-h-[90vh]">
              <button
                onClick={() => setShowAIAssistant(false)}
                className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors z-50 bg-gray-800 rounded-full p-2"
              >
                <FaTimes className="text-xl" />
              </button>
              <AIAssistant />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
