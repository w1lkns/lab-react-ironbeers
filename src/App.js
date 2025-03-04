import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import CreateBeer from "./pages/CreateBeer";
import RandomBeer from "./pages/RandomBeer";
import AllBeers from "./pages/AllBeers";
import BeerDeets from "./pages/BeerDeets";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<CreateBeer />} />
        <Route path="/beers/:id" element={<BeerDeets />} />
      </Routes>
    </div>
  );
}

export default App;
