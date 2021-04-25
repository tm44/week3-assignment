import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reviews extends Component {
  static propTypes = {
    stars: PropTypes.number,
    reviews: PropTypes.number
  }

  render() {
    return (
      <div className="rentalRating">
        <small>{this.props.stars} stars &middot; {this.props.reviews} reviews</small>
      </div>
    );
  }
}

export default Reviews;
