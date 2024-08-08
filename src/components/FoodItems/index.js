import { useState, useEffect } from "react";
import FooditemDetails from "../FooditemDetails";
import { Audio } from "react-loader-spinner";

import "./index.css";
const Fooditems = () => {
  const [fooditems, setFooditems] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const apiStatusConstants = {
    initial: "INITAIL",
    success: "SUCCESS",
    inProgress: "INPROGRESS",
    failure: "FAILURE",
  };
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  const fetchItems = async () => {
    setApiStatus(apiStatusConstants.inProgress);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = "https://cloudkitchenfullone-backend.onrender.com/api/fooditems";
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      setApiStatus(apiStatusConstants.success);
      setFooditems(data.fooditems);
      setFoodCat(data.foodCategory);
    } else if (response.status !== 200) {
      setApiStatus(apiStatusConstants.failure);
    }

    // console.log(data);
  };

  const [searchVal, setSerchval] = useState("");
  const searchFooditem = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const searchChange = (event) => {
    setSerchval(event.target.value);
  };
  const showFoodCat = (
    <div className="filterForFoodContainer">
      <button
        className={activeFilter === "All" ? "filterBtn" : "notActiveBtn"}
        value="All"
        onClick={() => {
          setActiveFilter("All");
        }}
      >
        All
      </button>
      {foodCat.map((each) => (
        <button
          key={each._id}
          type="button"
          className={
            activeFilter === each.category ? "filterBtn" : "notActiveBtn"
          }
          value={each.category}
          onClick={() => {
            setActiveFilter(each.category);
          }}
        >
          {each.category}
        </button>
      ))}
    </div>
  );
  let ShowFooditems = "";
  let filter = fooditems.filter((each) =>
    each.name.toLowerCase().includes(searchVal.toLowerCase())
  );
  if (activeFilter === "All") {
    ShowFooditems = filter.map((each) => (
      <FooditemDetails key={each._id} each={each} />
    ));
  } else {
    filter = fooditems.filter(
      (each) =>
        each.category === activeFilter &&
        each.name.toLowerCase().includes(searchVal.toLowerCase())
    );

    ShowFooditems = filter.map((each) => (
      <FooditemDetails key={each._id} each={each} />
    ));
  }

  let resultView = "";
  switch (apiStatus) {
    case apiStatusConstants.success:
      resultView = (
        <div className="foodItemsContainer">
          {showFoodCat}
          <hr />
          {ShowFooditems}
        </div>
      );
      break;

    case apiStatusConstants.inProgress:
      resultView = <Audio />;
      break;
    case apiStatusConstants.failure:
      resultView = <h1>Something went wrong Pleace try again ....</h1>;
      break;
    default:
      resultView = null;
  }
  return (
    <div>
      <form
        className="form-inline searchForm w-75 m-auto "
        onSubmit={searchFooditem}
      >
        <input
          className="form-control mr-sm-2 searchContainer"
          type="search"
          placeholder="Search"
          value={searchVal}
          onChange={searchChange}
          aria-label="Search"
        />
        <hr />
      </form>
      {resultView}
    </div>
  );
};

export default Fooditems;
