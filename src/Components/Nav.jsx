import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const ingredientRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const value = ingredientRef.current.value;
    if (value.trim() === "") return;
    navigate(`/searchedResults/${value.trim()}`);
    nameRef.current.value = "";
  };

  return (
    <aside className="w-80 bg-white p-6 border-r border-gray-200">
      <h1 className="text-xl font-semibold mb-8">Search by:</h1>
      <form onSubmit={(e) => handleSearch(e)} className="mb-8">
        <input
          ref={ingredientRef}
          className="w-full p-3 border border-gray-300 rounded mb-2"
          type="text"
          placeholder="The main Ingredient"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Search
        </button>
      </form>
    </aside>
  );
};

export default Nav;
