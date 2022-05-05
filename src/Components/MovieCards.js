/* eslint-disable jsx-a11y/img-redundant-alt */
// /* eslint-disable default-case */
// /* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ShowData from "./ShowData";
import "../style.css";
import { addWishlist } from "../action/index";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { FavoriteBorderTwoTone } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieCards = ({ image, name, rating, items, id }) => {
  //   // const [pass, setpass] = useState([])
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
        <ShowData className=" searchcard container" id={id} key={id}>
          <div className="img-wrapper">
            <img src={image} alt="movie Image" />
          </div>
          <p className="id">{id}</p>
        </ShowData>
        <h5 className="movie-title">
          {name}
          <span className="rating-box">{rating}</span>
        </h5>
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
        <ToastContainer />
      </div>
    </>
  );
};

export default MovieCards;
