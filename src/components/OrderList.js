import React from "react";
import Order from "./Order";
import PropTypes from "prop-types";

function OrderList(props) {
  const { orderList, onClickingDecrease, onClickingRestock } = props;
  return (
    <React.Fragment>
      <hr />
      {orderList.map((order) => (
        <Order
          whenOrderClicked={props.onOrderSelection}
          name={order.name}
          quantity={order.quantity}
          id={order.id}
          key={order.id}
          decreaseButton={onClickingDecrease}
          restockButton={onClickingRestock}
        />
      ))}
    </React.Fragment>
  );
}

OrderList.propTypes = {
  orderList: PropTypes.array,
  onOrderSelection: PropTypes.func,
  onClickingDecrease: PropTypes.func,
  onClickingRestock: PropTypes.func,
};
export default OrderList;
// for each order have a buttons to increase and restock quantity
