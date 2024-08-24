import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Recipe = () => {
  const [randomMeals, setRandomMeals] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        const responses = await Promise.all([
          axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
          axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
          axios.get("https://www.themealdb.com/api/json/v1/1/random.php"),
        ]);
        const meals = responses.map((response) => response.data.meals[0]);
        setRandomMeals(meals);
      } catch (error) {
        setError("Error fetching meals");
        console.error("Error fetching meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeals();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full min-h-[60vh]  flex flex-wrap gap-8  px-4 py-6 md:px-10 md:py-12">
      {randomMeals.map((meal) => (
        <Link
          to={`/details/${meal.strMeal}`}
          key={meal.idMeal}
          className="h-fit pb-10 w-[30%] text-black border border-black rounded-lg shadow-lg"
        >
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="px-4">
            <div className="flex flex-col mt-4">
              <span className="text-2xl font-bold line-clamp-1">
                {meal.strMeal}
              </span>
              <span className="flex mt-2 items-center">{meal.strCategory}</span>
            </div>
            <div className="my-6 flex flex-col gap-1">
              <span>Main Ingredients:</span>
              <ul className="px-4 line-clamp-3">
                {Object.keys(meal)
                  .filter((key) => key.startsWith("strIngredient") && meal[key])
                  .map((key, index) => (
                    <li key={index}>{meal[key]}</li>
                  ))}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recipe;
