import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [sentences, setSentences] = useState([]);
  const [meal, setMeal] = useState(null);

  const { item } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;

  useEffect(() => {
    const fetch = async () => {
      axios.get(url).then((response) => {
        setMeal(response.data.meals[0]);
      });
    };

    fetch();
  }, [item, url]);

  useEffect(() => {
    if (meal) {
      const instruction = meal.strInstructions || "";
      const splitSentences = instruction
        .split(".")
        .map((sentence) => sentence.trim())
        .filter((sentence) => sentence.length > 0);
      setSentences(splitSentences);
    }
  }, [meal]);
  const ingredients = Array.from(
    { length: 20 },
    (_, index) => `strIngredient${index + 1}`
  );

  return (
    <>
      {meal ? (
        <div className="w-screen px-12 min-h-screen py-6 ">
          <div
            style={{ backgroundImage: `url(${meal.strMealThumb})` }}
            className=" h-[30vw] py-10 w-[100%] bg-no-repeat bg-contain bg-center flex flex-col items-center  "
          ></div>

          <div className="px-4">
            <div className="flex flex-col mt-16 ">
              <span className="text-4xl font-bold">{meal.strMeal}</span>
              <span className="flex mt-2 items-center">{meal.strCategory}</span>
            </div>
            <div className="my-6 flex flex-col gap-1">
              <span className="font-bold text-4xl">Ingredients:</span>
              <ul className="px-4  list-disc mb-3">
                {ingredients.map((ingredientKey) => (
                  <li key={ingredientKey}>
                    <h1>{meal[ingredientKey]}</h1>
                  </li>
                ))}
              </ul>
              <span className="font-bold text-4xl">Steps:</span>
              <ul className="list-decimal px-4">
                {sentences.map((sentence, index) => (
                  <li key={index}>{sentence}.</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Details;
