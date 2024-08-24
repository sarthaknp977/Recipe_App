import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchResult from "./SearchResult";

const SearchedResults = () => {
  const [meals, setMeals] = useState(null);
  const { search } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(url);
        setMeals(response.data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetch();
  }, [search]);

  return meals ? (
    <div className="px-12 py-4 h-screen w-screen overflow-y-scroll flex flex-col gap-10 ">
      <h1>Results for {search}</h1>
      <div className="flex flex-wrap gap-12">
        {meals.map((meal) => (
          <SearchResult key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  ) : (
    <p>No meals found</p>
  );
};

export default SearchedResults;
