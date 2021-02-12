import React from "react";
import NewOrderForm from "./NewOrderForm";
import OrderList from "./OrderList";
import OrderDetail from "./OrderDetail";
import EditOrderForm from "./EditOrderForm";

class OrderControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderFormVisibleOnPage: false,
      masterOrderList: [],
      selectedOrder: null,
      editing: false,
    };
  }

  //add new order to list
  handleAddingNewOrderToList = (newOrder) => {
    const newMasterOrderList = this.state.masterOrderList.concat(newOrder);
    this.setState({
      masterOrderList: newMasterOrderList,
      orderFormVisibleOnPage: false,
    });
  };
  //select an order
  handleChangingSelectedOrder = (id) => {
    const selectedOrder = this.state.masterOrderList.filter(
      (order) => order.id === id
    )[0];
    this.setState({ selectedOrder: selectedOrder });
  };
  //delete order
  handleDeletingOrder = (id) => {
    const newMasterOrderList = this.state.masterOrderList.filter(
      (order) => order.id !== id
    );
    this.setState({ masterOrderList: newMasterOrderList, selectedOrder: null });
  };
  //edit order
  handleEditClick = () => {
    this.setState({ editing: true });
  };
  //edit list
  handleEditingOrderInList = (orderToEdit) => {
    const editedMasterOrderList = this.state.masterOrderList
      .filter((order) => order.id !== this.state.selectedOrder.id)
      .concat(orderToEdit);
    this.setState({
      masterOrderList: editedMasterOrderList,
      editing: false,
      selectedOrder: null,
    });
  };
  //decrease quantity
  handleDecreaseQuantity = (id) => {
    const selectedOrder = this.state.masterOrderList.filter(
      (order) => order.id === id
    )[0];
    selectedOrder.quantity--;
    this.setState({ selectedOrder: null });
  };
  //increase quantity/restock
  handleRestockClicked = (id) => {
    const orderToRestock = this.state.masterOrderList.filter(
      (order) => order.id === id
    )[0];
    orderToRestock.quantity++;
    this.setState({ selectedOrder: null });
  };
  //on click what state should be shown
  handleClick = () => {
    if (this.state.selectedOrder != null) {
      this.setState({
        orderFormVisibleOnPage: false,
        selectedOrder: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        orderFormVisibleOnPage: !prevState.orderFormVisibleOnPage,
      }));
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    //if the state is on editing form show edit form, order is selected order, oneEditOrder will trigger the edit list function
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditOrderForm
          order={this.state.selectedOrder}
          onEditOrder={this.handleEditingOrderInList}
        />
      );
      buttonText = "Return to Order List";
      //if state is selected order show the order that user clicked on, includes delete and edit buttons
    } else if (this.state.selectedOrder != null) {
      currentlyVisibleState = (
        <OrderDetail
          order={this.state.selectedOrder}
          onClickingDelete={this.handleDeletingOrder}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Order List";
      //if state is create new order, show new order form
    } else if (this.state.orderFormVisibleOnPage) {
      currentlyVisibleState = (
        <NewOrderForm onNewOrderCreation={this.handleAddingNewOrderToList} />
      );
      buttonText = "Return to Order List";
    } else {
      //original state, show order list with selection click, decrease and increase functions
      currentlyVisibleState = (
        <OrderList
          orderList={this.state.masterOrderList}
          onOrderSelection={this.handleChangingSelectedOrder}
          onClickingDecrease={this.handleDecreaseQuantity}
          onClickingRestock={this.handleRestockClicked}
        />
      );
      buttonText = "Add Order";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default OrderControl;
