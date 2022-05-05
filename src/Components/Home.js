/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style.css";
// import HomeMovies from "./HomeMovies";
import { Button } from "@mui/material";
import MovieGrid from "./MovieGrid";
import "react-toastify/dist/ReactToastify.css";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeMovies from "./HomeMovies";
import Navbar from "./Navbar";
import { BounceLoader } from "react-spinners";

const Home = () => {
  const [results, setResults] = useState("");
  const [secondResults, setSecondResults] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const apikey = "13557e3483dfe365e6be2296322e91b3";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=${
          Math.floor(Math.random() * 30) + 1
        }`
      )
      .then((response) => {
        setSecondResults(response.data.results);
      });

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <div className="loading-center">
        <BounceLoader color={"#032541"} loading={true} size={150} />
      </div>
    );
  }

  const onHandlerChange = (e) => {
    // setInput(e.target.value);
    const movies = e.target.value;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&page=1&query=${input}`
      )
      .then((result) => {
        setResults(result.data.results);
      });
    setInput(movies);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="input-section container-fluid">
          <h1> Looking For Moviess..</h1>
          <div className="search-section container">
            <input
              type="text"
              value={input || ""}
              onChange={onHandlerChange}
              className="input-data"
              placeholder="Type Movie Name....."
            />
          </div>
        </div>
        {input === "" ? null : <MovieGrid data={results} />}

        <div className="movieData container-fluid">
          <div className="flexgrid container-fluid" key={Math.random()}>
            {secondResults.map((items) => (
              <HomeMovies
                image={`https://image.tmdb.org/t/p/w200${items.poster_path}`}
                name={items.title}
                items={items}
                id={items.id}
                rating={items.vote_average}
              />
            ))}
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Home;
