import Recipe from "./Recipe";

const PopularRecipes = () => {
  return (
    <div className="w-full min-h-[60vh] flex flex-wrap gap-48 justify-center  px-4 py-6 md:px-10 md:py-12">
      <Recipe />
    </div>
  );
};

export default PopularRecipes;
