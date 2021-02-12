import React from "react";
import Proptypes from "prop-types";

function Order(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenOrderClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>
          {/* if quantity is greater than 0 show quantity else show out of stock */}
          Quantity:{" "}
          {props.quantity > 0 ? (
            props.quantity
          ) : (
            <div style={{ color: "red" }}> Out of stock</div>
          )}
        </h5>
      </div>
      <button onClick={() => props.decreaseButton(props.id)}>
        Decrease Quantity
      </button>
      <button onClick={() => props.restockButton(props.id)}>Restock</button>
    </React.Fragment>
  );
}

Order.propTypes = {
  name: Proptypes.string,
  quantity: Proptypes.number,
  id: Proptypes.string,
  whenOrderClicked: Proptypes.func,
  decreaseButton: Proptypes.func,
  restockButton: Proptypes.func,
};
export default Order;

// buttons to call on the decrease and restock functions when clicked
//font is red when out of stock aka quantity is less 0
