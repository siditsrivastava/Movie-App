/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { addWishlist } from "../action/index";
import { useDispatch } from "react-redux";
import ShowData from "./ShowData";
import { FavoriteBorderTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeMovies = ({ name, image, key, items, rating, id }) => {
  const dispatch = useDispatch();

  const showmassage = () => {
    toast.success("🦄 Wishlist Successfully!", {
      position: "top-center",
      autoClose: 500,
    });
  };

  return (
    <>
      <div>
        <div className="container" key={id}>
          <ShowData className="searchcard" id={id}>
            <div className="img-wrapper">
              <img src={image} alt="movie poster" />
            </div>
            <p className="id">{id}</p>
          </ShowData>
        </div>

        <h6 className="movie-title">
          {name}
          <span className="rating-box">{rating}</span>
        </h6>

        <div className="movie-details">
          <Button
            className="wishlist-icon"
            variant="contained"
            onClick={() => {
              dispatch(addWishlist(items));
              showmassage();
            }}
            endIcon={
              <FavoriteBorderTwoTone
                sx={{ fontSize: 100, fontWeight: "medium" }}
              />
            }
          >
            Wishlist
          </Button>
        </div>
      </div>
      <br></br>
      <ToastContainer />
    </>
  );
};

export default HomeMovies;
