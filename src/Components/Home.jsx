import Nav from "./Nav";
import Banner from "./Banner";
import PopularRecipes from "./PopularRecipes";

const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <Nav />
      <main className="flex-1 overflow-y-scroll  px-8 py-4">
        <Banner />
        <section>
          <h2 className="text-xl font-bold mt-6">Popular Recipes This Week</h2>
          <PopularRecipes />
        </section>
      </main>
    </div>
  );
};

export default Home;
