import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Details";
import SearchedResult from "./Components/SearchedResults";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:item" element={<Details />} />
      <Route path="/searchedResults/:search" element={<SearchedResult />} />
    </Routes>
  );
};

export default App;
