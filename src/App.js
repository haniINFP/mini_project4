import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { dummy } from "./data/movieNowPlaying.js";
import Movie from "./components/Movie.jsx";
import MovieDetail from "./components/MovieDetail.jsx"; // 상세 페이지 컴포넌트
// 2222222

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              dummy.results.map((item) => (
                <Movie
                  key={item.id}
                  id={item.id} // id 전달
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  popularity={item.popularity}
                  release_date={item.release_date}
                />
              ))
            }
          />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
