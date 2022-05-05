/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { deleteWishlist } from "../action/index";
import { useDispatch } from "react-redux";
import "../wishlistStyle.css";
import ShowData from "./ShowData";
import { PuffLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const Wishlist = () => {
  const list = useSelector((state) => state.reducerData.list);
  const [loading, setloading] = useState(true);

  // console.log(list);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <div className="loading-center">
        <PuffLoader color={"#6B6C6D"} loading={true} size={150} />
      </div>
    );
  }

  const showmassage = () => {
    toast.success("Remove Successfully!!", {
      position: "top-center",
      autoClose: 400,
    });
  };

  return (
    <>
      <Navbar />
      <div className="wishlist-header">
        <h2 className="wishlist-tagline">Wishlist Movies are there...</h2>

        <div className="movieData_wish container-fluid">
          <div className=" flexgrid_wish container-fluid " key={Math.random()}>
            {list
              ? list.map((list) => (
                  <ShowData className="searchcard_wish" id={list.data.id}>
                    <div className="img-wrapper_wish">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${list.data.poster_path}`}
                        alt="movie poster"
                      />
                      <p>{list.data.id}</p>
                    </div>
                    <div className="movie-title-name">
                      <h6>
                        {list.data.original_title}
                        <span className="rating-box_wish">
                          {list.data.vote_average}
                        </span>
                      </h6>
                    </div>

                    <button
                      className="remove-btn btn bg-primary"
                      onClick={() => {
                        dispatch(deleteWishlist(list.id));
                        showmassage();
                      }}
                    >
                      Remove
                    </button>
                  </ShowData>
                ))
              : "N/A"}
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Wishlist;
