import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reviews from './Reviews';
import RentalPrice from './RentalPrice';

class Rental extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    city: PropTypes.string.isRequired,
    isInCart: PropTypes.bool,
    index: PropTypes.number.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    stars: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired
  }

  render() {
    return (
      <div className="rental">
        <div className="rentalImage" style={{
          backgroundImage: 'url(' + this.props.image + ')'
        }}>
        </div>
        <div className="rentalText">
          <h5>{this.props.city}</h5>
          <div className="rentalType">{this.props.houseType}</div>
            {this.props.title}
          <Reviews stars={this.props.stars} reviews={this.props.reviews} />
          {!this.props.isInCart &&
          <button
            className="btn btn-success btn-sm addToCart"
            onClick={this.props.onAddToCart(this.props.index)}>
              Add To Cart
          </button>}

          {this.props.isInCart &&
          <div className="text-success font-weight-bold pb-3">In the cart!</div>
          }
        </div>
        <div className="rentalPrice">
          <RentalPrice price={this.props.price} description={this.props.description} />
        </div>
      </div>
    );
  }
}

export default Rental;
