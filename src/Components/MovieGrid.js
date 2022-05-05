/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";

const MovieGrid = ({ data }) => {
  return (
    <>
      <div>
        <div className="flexgrid container-fluid" key={Math.random()}>
          {data
            ? data.map((items) => (
                <MovieCards
                  image={`https://image.tmdb.org/t/p/w200${items.poster_path}`}
                  name={items.title}
                  rating={items.vote_average}
                  items={items}
                  id={items.id}
                />
              ))
            : "no movie FOund"}
        </div>
      </div>
    </>
  );
};

export default MovieGrid;
