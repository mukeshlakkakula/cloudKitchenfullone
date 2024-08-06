import { Link, useNavigate, useLocation } from "react-router-dom";

import { useCart } from "../ContextReducer";
import logo from "./c62324e77b38a2f323674c10b08aa65b-removebg-preview.png";

import "./index.css";
// import { useState } from "react";

const Header = () => {
  const location = useLocation();

  const data = useCart();
  const badge =
    data.length !== 0 ? (
      <span className="badge badge-danger bg-danger rounded-circle">
        {data.length}
      </span>
    ) : (
      ""
    );
  const navigate = useNavigate();
  const removeToken = () => {
    var result = window.confirm("Are you sure you want to logout");

    if (result) {
      localStorage.removeItem("authToken");

      navigate("/");
    } else {
      console.log("User clicked Cancel, action canceled.");
    }
  };

  return (
    <div className="headerContainer">
      <Link to="/">
        <img
          style={{ width: "100px" }}
          className="imgLogosm"
          src={logo}
          alt="kitchenLogo"
          value="/"
        />
      </Link>

      <Link to="/">
        <button
          className={location.pathname === "/" ? "activeBtn" : "notActiveBtn"}
          value="/"
        >
          Home
        </button>
      </Link>

      <div className="headerInnerContainer">
        {localStorage.getItem("authToken") ? (
          <>
            <Link to="/mycheckouts">
              <button
                type="button"
                value="Checkouts"
                className={
                  location.pathname === "/mycheckouts"
                    ? "activeBtn"
                    : "notActiveBtn"
                }
              >
                my Checkouts
              </button>
            </Link>
            <Link to="/cart">
              <button
                type="button"
                value="/cart"
                className={
                  location.pathname === "/cart" ? "activeBtn" : "notActiveBtn"
                }
              >
                my Cart {badge}
              </button>
            </Link>
            <button className="lgoutBtn" onClick={removeToken}>
              Logout
            </button>
          </>
        ) : (
          <div className="loSinContainer">
            <Link to="/login">
              <button
                className={
                  location.pathname === "/login" ? "activeBtn" : "notActiveBtn"
                }
                value="/login"
                // onClick={() => {
                //   setActiveRoute("/login");
                // }}
              >
                Login
              </button>
            </Link>
            <Link to="/createuser">
              <button
                className={
                  location.pathname === "/createuser"
                    ? "activeBtn"
                    : "notActiveBtn"
                }
                value="/createuser"
              >
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
