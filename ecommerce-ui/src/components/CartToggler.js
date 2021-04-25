import React from 'react';
import PropTypes from 'prop-types';

class CartToggler extends React.Component {

  static propTypes = {
    isCartVisible: PropTypes.bool,
    onToggleCart: PropTypes.func,
    itemCount: PropTypes.number
  };

  render() {
    return (
      <button onClick={this.props.onToggleCart} className="btn btn-sm btn-success cartToggler">
        {this.props.isCartVisible && 'Hide Cart'}
        {!this.props.isCartVisible && 'Show Cart (' + this.props.itemCount + ')'}
      </button>
    );
  }
}

export default CartToggler;
