import React from "react";
import { Link } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";



export default function Movie({ id, title, poster_path, popularity, overview }) {
  return (
      <Link to={`/detail/${id}`}>
        <div className="movie-container">
          <img src={IMG_BASE_URL + poster_path} alt="영화포스터" width={'400px'} height={'300x'} />
          <div className="overview">{overview.slice(0,100)}.....</div>
          <div className="movie-info">
            <div className="title">{title}</div>
            <div className="popularity">{popularity}</div>
          </div>
          
        </div>
      </Link>
  );
}
