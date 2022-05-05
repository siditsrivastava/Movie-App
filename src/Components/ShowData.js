/* eslint-disable no-undef */
/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import axios from "axios";
import "../style.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Grid } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars-2";

const style = {
  position: "absolute",
  // as 'absolute',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  borderRadius: "10px",
  bgcolor: "#032541",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 3,
  // overflow:"hidden",
};

const paper = {
  width: "90%",
  height: "80%",
  backgroundColor: "#032541",
  border: "1px solid white",
  color: "white",
  border: "none",
  overflowY: "scroll",
};

const modal = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function ShowData({ children, id }) {
  // const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [getData, setGetData] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=13557e3483dfe365e6be2296322e91b3&language=en-US`
    );
    setGetData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <button className="searchcard btn" onClick={handleOpen}>
          {children}
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          // className={modal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            {getData && (
              <Box sx={style} key={Math.random().toString()}>
                <div sx={paper}>
                  <Grid container>
                    <Grid item={true} md={4} lg={4} xs={12}>
                      <div className="image">
                        <img
                          className="poster-img"
                          src={`https://image.tmdb.org/t/p/w200${getData.poster_path}`}
                        />

                        <img
                          className="backdrop-img"
                          src={`https://image.tmdb.org/t/p/w200${getData.backdrop_path}`}
                        />
                      </div>
                    </Grid>
                    <Grid item={true} lg={8} md={8} xs={12}>
                      <div className="container">
                        <h4 className="poster-title">
                          {getData.title ? getData.title : "N/A"}
                        </h4>
                        <p className="poster-year">
                          {" "}
                          ({getData.release_date ? getData.release_date : "N/A"}
                          ){" "}
                        </p>

                        <div className="overview">
                          <Scrollbars>
                            <h6>OVERVIEW :-</h6>
                            <p>
                              {" "}
                              {getData.overview ? getData.overview : "N/A"}{" "}
                            </p>
                          </Scrollbars>
                        </div>
                        <div className="rating">
                          <h6>Rating :- {getData.vote_average}</h6>
                        </div>
                        <div className="runtime">
                          <p>
                            Movie Runtime :-{" "}
                            {getData.runtime ? getData.runtime : "N/A"} minutes{" "}
                          </p>
                        </div>

                        <div className="movie-category">
                          {" "}
                          Category:-
                          {getData.genres.map((items) => (
                            <p>{items.name ? items.name+ "," : "N/A"}</p>
                          ))}
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Box>
            )}
          </Fade>
        </Modal>
      </div>
    </>
  );
}
