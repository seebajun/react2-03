import "bootstrap/dist/css/bootstrap.min.css";
import BarraNav from "./Components/BarraNav/BarraNav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home.jsx";
import Pokemons from "./Views/Pokemons";
import Stats from './Components/Stats/Stats.jsx'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BarraNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="pokemons/:name" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
