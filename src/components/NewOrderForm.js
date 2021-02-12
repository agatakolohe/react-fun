import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewOrderForm(props) {
  function handleNewOrderFormSubmission(event) {
    event.preventDefault();
    props.onNewOrderCreation({
      name: event.target.name.value,
      quantity: event.target.quantity.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewOrderFormSubmission}
        buttonText="Submit"
      />
    </React.Fragment>
  );
}

NewOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func,
};

export default NewOrderForm;
