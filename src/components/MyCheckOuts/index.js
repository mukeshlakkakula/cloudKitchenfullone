import { useEffect, useState } from "react";
import CheckoutItemDetails from "../CheckOutItemDetails";

import imageView from "./928bb331a32654ba76a4fc84386f3851-removebg-preview.png";
import { TailSpin } from "react-loader-spinner";
import "./index.css";
const MyCheckOuts = () => {
  const apiStatusConstants = {
    initial: "INITAIL",
    success: "SUCCESS",
    inProgress: "INPROGRESS",
    failure: "FAILURE",
  };
  const [checkoutData, setCheckoutData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const fetchMyOrder = async () => {
    setApiStatus(apiStatusConstants.inProgress);

    const options = {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    };
    const response = await fetch(
      "https://cloudkitchenfullone-backend.onrender.com/api/myOrderData",
      options
    );

    const data = await response.json();

    if (data.orderData !== null) {
      setApiStatus(apiStatusConstants.success);
      setCheckoutData(data.orderData.order_data);
    } else {
      setCheckoutData([]);
      setApiStatus(apiStatusConstants.failure);
    }
  };
  useEffect(() => {
    fetchMyOrder();
  }, []);

  const showCheckouts =
    checkoutData.length !== 0 ? checkoutData.slice(0).reverse() : "";

  const myCheckoutDetails =
    checkoutData.length !== 0
      ? showCheckouts.map((each) => (
          <div
            className="checkOutOuterMapContainer"
            key={each[0].Order_date[1]}
          >
            <CheckoutItemDetails each={each} />
          </div>
        ))
      : "";
  let resultView = "";
  switch (apiStatus) {
    case apiStatusConstants.success:
      resultView = <div key="n1">{myCheckoutDetails}</div>;
      break;

    case apiStatusConstants.inProgress:
      resultView = (
        <div className="checkOutOuterMapContainer">
          <TailSpin color="white" />
        </div>
      );
      break;
    case apiStatusConstants.failure:
      resultView = (
        <div className="notFounditemContainer">
          <p className="p-4 fs-4">No Item is added in CheckOuts... </p>
          <img src={imageView} alt="emptyCart" className="emptyImg" />
        </div>
      );
      break;
    default:
      resultView = null;
  }
  return (
    <div className="MycheckOuterContainer">
      <div className="resultviewOuterContainer">{resultView}</div>{" "}
    </div>
  );
};

export default MyCheckOuts;
