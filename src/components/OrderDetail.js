import React from "react";
import PropTypes from "prop-types";

function OrderDetail(props) {
  const { order } = props;
  return (
    <React.Fragment>
      <h1>Order Detail</h1>
      <h3>Name: {order.name}</h3>
      <h3>
        Quantity:
        {order.quantity > 0 ? (
          order.quantity
        ) : (
          <div style={{ color: "red" }}> Out of stock</div>
        )}
      </h3>
      <button onClick={props.onClickingEdit}>Update Order</button>
      <button
        class="btn btn-danger"
        onClick={() => props.onClickingDelete(order.id)}
      >
        Delete Order
      </button>
      <hr />
    </React.Fragment>
  );
}
OrderDetail.propTypes = {
  order: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default OrderDetail;
