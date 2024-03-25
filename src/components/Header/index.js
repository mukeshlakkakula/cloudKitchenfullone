import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../ContextReducer";

import "./index.css";
import { useState } from "react";

const Header = () => {
  const [activeRoute, setActiveRoute] = useState("home");

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
          src="https://i.pinimg.com/564x/c6/23/24/c62324e77b38a2f323674c10b08aa65b.jpg"
          alt="kitchenLogo"
          value="home"
          onClick={() => {
            setActiveRoute("home");
          }}
        />
      </Link>

      <Link to="/">
        <button
          className={activeRoute === "home" ? "activeBtn" : "notActiveBtn"}
          value="home"
          onClick={() => {
            setActiveRoute("home");
          }}
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
                onClick={() => {
                  setActiveRoute("Checkouts");
                }}
                className={
                  activeRoute === "Checkouts" ? "activeBtn" : "notActiveBtn"
                }
              >
                my Checkouts
              </button>
            </Link>
            <Link to="/cart">
              <button
                type="button"
                value="Cart"
                onClick={() => {
                  setActiveRoute("Cart");
                }}
                className={
                  activeRoute === "Cart" ? "activeBtn" : "notActiveBtn"
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
                  activeRoute === "Login" ? "activeBtn" : "notActiveBtn"
                }
                value="Login"
                onClick={() => {
                  setActiveRoute("Login");
                }}
              >
                Login
              </button>
            </Link>
            <Link to="/createuser">
              <button
                className={
                  activeRoute === "Signup" ? "activeBtn" : "notActiveBtn"
                }
                value="Signup"
                onClick={() => {
                  setActiveRoute("Signup");
                }}
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
