import { useDispatchCart, useCart } from "../ContextReducer";

import imageCartempty from "./928bb331a32654ba76a4fc84386f3851-removebg-preview.png";
import "./index.css";

const Cart = () => {
  let data = useCart();

  let dispatch = useDispatchCart();

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");

    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let options = {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: [
          new Date().toDateString(),
          new Date().toLocaleTimeString(),
        ],
      }),
    };
    let response = await fetch(
      "https://cloudkitchenfullone-backend.onrender.com/api/orderData",
      options
    );

    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.finalPrice, 0);
  const tableHeadings = (
    <div className="container m-auto table-responsive  table-responsive-sm table-responsive-md ">
      <table className="table ">
        <thead className=" text-success fs-4">
          <tr>
            <th scope="col" className="headings">
              #
            </th>
            <th scope="col" className="headings">
              Name
            </th>
            <th scope="col" className="headings">
              Quantity
            </th>
            <th scope="col" className="headings">
              Option
            </th>
            <th scope="col" className="headings">
              Amount
            </th>
            <th scope="col" className="headings"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr key={food.id + food.size}>
              <th className="thIndex" scope="row">
                {index + 1}
              </th>
              <td className="itemsInTbl">{food.name}</td>
              <td className="itemsInTbl">{food.qty}</td>
              <td className="itemsInTbl">{food.size}</td>
              <td className="itemsInTbl">{food.finalPrice}</td>
              <td>
                <button
                  type="button"
                  className="deleteBtnIntable"
                  onClick={() => {
                    dispatch({ type: "REMOVE", index: index });
                  }}
                >
                  X
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h1 className="fs-2 totalPriceSm">Total Price: {totalPrice}/-</h1>
      </div>
      <div>
        <button className="checkOutbtn" onClick={handleCheckOut}>
          {" "}
          Check Out{" "}
        </button>
      </div>
    </div>
  );

  if (data.length === 0) {
    return (
      <div className="notFounditemContainer">
        <p className="mt-5 w-100 text-center fs-3">
          You not added any Item to the Cart{" "}
        </p>
        <img className="emptyImg" src={imageCartempty} alt="emptyCart" />
      </div>
    );
  }
  return <div className="tableContainerouter">{tableHeadings}</div>;
};

export default Cart;
