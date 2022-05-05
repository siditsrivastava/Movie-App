import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className=" navbar container">
          <Link to="/">
            <h2>Box_Office.</h2>
          </Link>
          <span className="category">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/wishlistMovies">Wishlist</Link>
                {/* <Link to="/ss">Contact Us</Link> */}
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
