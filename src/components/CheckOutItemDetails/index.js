import "./index.css";

const CheckoutItemDetails = (props) => {
  const { each } = props;

  const ItemsDetails = each.map((each) => {
    if (each.Order_date !== undefined) {
      const Date = (
        <div key={each.Order_date[1]}>
          {" "}
          <p className="dateTime">
            {each.Order_date[0]} Time {each.Order_date[1]}
          </p>
        </div>
      );
      return Date;
    }
    return (
      <div key={each.id} className="CheckOutDetailsbtmContainer">
        <p className="para1">
          {each.qty} {each.size} {each.name} = {each.finalPrice} ₹
        </p>
        {/* <p>
          <span>Item</span>: {each.name}
        </p>
        <p className="para1">
          <span>S</span>: {each.size}
        </p>
        <p className="para1">
          <span>Q</span>:
        </p>
        <p className="para1">
          <span> ₹</span>: {each.finalPrice} Rs
        </p> */}
      </div>
    );
  });

  return <div className="checkOutDetailsFullContainer">{ItemsDetails}</div>;
};

export default CheckoutItemDetails;
