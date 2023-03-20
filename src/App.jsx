import "./App.css";

import Navbar from "./Navbar";
import Home from "./Comonents/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./Comonents/Movies";
import Movie from "./Comonents/Movie";
import Tv from "./Comonents/Tv";
import TvDetails from "./Comonents/TvDetails";
import Footer from "./Comonents/Footer";
import MovieDetails from "./Comonents/MovieDetails";
import SeasonDetails from "./Comonents/SeasonDetails";
import NotFound from "./Comonents/NotFound";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="  min-w-[375px] max-w-[1440px] bg-[#111] font-['Poppins'] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="movie/:id" element={<MovieDetails />}></Route>
        <Route path="tv/:id" element={<TvDetails />}></Route>
        <Route
          path="tv/:name/:id/season/:num"
          element={<SeasonDetails />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
