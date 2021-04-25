import React, {Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';
import CartImage from '../images/cart.svg';

class ShoppingCart extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.shape({
          city: PropTypes.string.isRequired
        }),
        payment: PropTypes.shape({
          cost: PropTypes.number.isRequired
        }),
        isInCart: PropTypes.bool
      })
    ).isRequired,
    onRemoveItem: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
  };

  renderItems() {
    const itemsSelected = this.props.items.filter(item => item.isInCart);

    if (itemsSelected.length === 0)
      return (
        <li className="list-group-item d-flex justify-content-between align-items-center">No items in cart</li>
      );
    else {
      return itemsSelected.map((item, index) => {
        return (
            <ShoppingCartItem
              title={item.title}
              city={item.location.city}
              cost={item.payment.cost}
              key={index}
              onRemoveItem={this.props.onRemoveItem} />
        )
      })
    }
  }

  renderTotal() {
    const itemsSelected = this.props.items.filter(item => item.isInCart);
    if (itemsSelected.length === 0)
      return '';

    const total = itemsSelected.reduce((accumulator, currentValue) => {return accumulator + currentValue.payment.cost}, 0);
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary">
        <strong>TOTAL:</strong>
        <span className="badge badge-primary badge-pill">${total}</span>
      </li>
    );
  }

  render() {
    if (this.props.isVisible) {
      return (
          <div className="shoppingCartContainer">
          <div>
            <ul className="list-group">
              <li className="list-group-item active">
                <img src={CartImage} alt="Shopping Cart" className="cartImage" /><strong>Shopping Cart</strong>
              </li>
              {this.renderItems()}{
              this.renderTotal()}
            </ul>
          </div>
        </div>
      );
              }
    else
      return null;
  }
}

export default ShoppingCart;
