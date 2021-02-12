import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditOrderForm(props) {
  const { order } = props;

  function handleEditOrderFormSubmission(event) {
    event.preventDefault();
    props.onEditOrder({
      name: event.target.name.value,
      quantity: event.target.quantity.value,
      id: order.id,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditOrderFormSubmission}
        buttonText="Update Order"
      />
    </React.Fragment>
  );
}
EditOrderForm.propTypes = {
  order: PropTypes.object,
  onEditOrder: PropTypes.func,
};
export default EditOrderForm;
