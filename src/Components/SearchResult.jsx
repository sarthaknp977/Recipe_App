// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const SearchResult = ({ meal }) => {
//   return (
//     <Link
//       to={`/details/${meal.strMeal}`}
//       className=" h-fit pb-10 w-[30%] text-black border border-black rounded-lg overflow-hidden shadow-lg "
//     >
//       <img src={meal.strMealThumb} alt="" />

//       <div className="px-4">
//         <div className="flex flex-col mt-16 ">
//           <span className="text-4xl font-bold">{meal.strMeal}</span>
//           <span className="flex mt-2 items-center">{meal.strCategory}</span>
//         </div>
//         <div className="my-6 flex flex-col  gap-1">
//           <span>Main Ingredients:</span>
//           <ul className="px-4 ">
//             <li>Patty</li>
//             <li> Toppings(Lettuce, Onion, Tomato, Pickle, Cheese)</li>
//             <li>Condiments and Sauces</li>
//           </ul>
//         </div>
//       </div>
//       <span className="ml-4">Read More...</span>
//     </Link>
//   );
// };

// export default SearchResult;

import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ meal }) => {
  const ingredients = Array.from(
    { length: 20 },
    (_, index) => `strIngredient${index}`
  );

  return (
    <Link
      to={`/details/${meal.strMeal}`}
      className="h-fit pb-10 w-[33%] text-black border border-black rounded-lg overflow-hidden shadow-lg"
    >
      <img className="w-full " src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="max-h-[80vh] px-4">
        <div className="flex flex-col mt-6 ">
          <span className="text-4xl font-bold ">{meal.strMeal}</span>
          <span className="flex mt-2 items-center">{meal.strCategory}</span>
        </div>
        <div className="my-6 flex flex-col gap-1">
          <span>Main Ingredients:</span>
          <ul className="px-4 line-clamp-3">
            {ingredients.map((ingredientKey) => (
              <li key={ingredientKey}>
                <h1>{meal[ingredientKey]}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="ml-4">Read More...</span>
    </Link>
  );
};

export default SearchResult;
