import "./index.css";

import { useDispatchCart, useCart } from "../ContextReducer";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const FooditemDetails = (props) => {
  const { each } = props;
  let dispatch = useDispatchCart();
  const useCartData = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(each.options[0]);
  const SizeDefault = (event) => {
    setSize(event.target.value);
  };

  const price = props.each.price_in_rupees[size];

  // console.log(qty, size, props.each.price_in_rupees, each.options[0], price);
  let finalPrice = qty * parseInt(price);

  const handleAddToCart = async () => {
    let foodUp = {
      id: each._id,
      name: each.name,
      quantity: qty,
      size: size,

      finalPrice: finalPrice,
    };

    //size == medium  , qty = 1,2

    const checkId = useCartData.filter((each) => each.id === foodUp.id);

    const checkIdAndSize = useCartData.filter(
      (each) => each.id === foodUp.id && each.size === foodUp.size
    );

    if (
      checkId.length === 0 ||
      useCartData.length === 0 ||
      (checkId.length !== 0 && checkIdAndSize.length === 0)
    ) {
      // console.log("Size different so simply ADD one more to the list", size);
      await dispatch({
        type: "ADD",
        id: each._id,
        name: each.name,
        quantity: qty,
        size: size,

        finalPrice: finalPrice,
      });

      return;
    } else {
      await dispatch({
        type: "UPDATE",
        id: each._id,
        finalPrice: finalPrice,
        size: size,
        quantity: qty,
      });
      return;
    }
  };
  // useEffect(() => {}, [size]);
  return (
    <div className="foodItemDetailsContainer">
      <img src={each.image} alt={each._id} className="Foodimage" />
      <div className="bottomContainer">
        <div className="nameAndPriceContainer">
          <h1 className="foodname">{each.name}</h1>{" "}
          <h1 className="finalPrice">₹{finalPrice}/-</h1>
        </div>

        <p className="foodDescriptionText">{each.description}</p>
        <label htmlFor="type">Type</label>
        <select id="type" name="type" className="m-2" onChange={SizeDefault}>
          {each.options.map((each) => (
            <option key={each} value={each}>
              {each}
            </option>
          ))}
        </select>
        <label htmlFor="Quantity">Quantity</label>
        <select
          id="Quantity"
          name="Quantity"
          className="m-2"
          onChange={(e) => setQty(e.target.value)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((each) => (
            <option key={each} value={each}>
              {each}
            </option>
          ))}
        </select>

        <div className="cartAndprice ">
          <button className="addcartBtn" onClick={handleAddToCart}>
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooditemDetails;
