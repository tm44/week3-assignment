import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCartItem extends Component {
  static propTypes = {
    title: PropTypes.string,
    city: PropTypes.string,
    cost: PropTypes.number,
    onRemoveItem: PropTypes.func
  }

  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
        <span onClick={this.props.onRemoveItem(this.props.title)} className="badge badge-danger badge-pill removeItem">Remove</span>&nbsp;
        {this.props.city}
        </div>
        <span className="badge badge-success badge-pill">${this.props.cost}</span>
      </li>
    );
  }

}

export default ShoppingCartItem;
