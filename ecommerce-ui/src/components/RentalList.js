import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rental from './Rental';

class RentalList extends Component {

  static propTypes = {
    rentals: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        houseType: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        location: PropTypes.shape({
          city: PropTypes.string.isRequired,
          country: PropTypes.string
        }),
        payment: PropTypes.shape({
          cost: PropTypes.number.isRequired,
          description: PropTypes.string
        }),
        host: PropTypes.shape({
          name: PropTypes.string,
          isSuperhost: PropTypes.bool
        }),
        rating: PropTypes.shape({
          stars: PropTypes.number.isRequired,
          reviews: PropTypes.number.isRequired
        }),
        isInCart: PropTypes.bool
      })
    ).isRequired,

    onAddToCart: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="rentalsContainer">
          {this.props.rentals.map((item, index) => {
            return (
              <Rental
                title={item.title}
                houseType={item.houseType}
                image={item.image}
                price={item.payment.cost}
                description={item.payment.description}
                city={item.location.city}
                key={index}
                index={index}
                isInCart={item.isInCart}
                onAddToCart={this.props.onAddToCart}
                stars={item.rating.stars}
                reviews={item.rating.reviews}
                />
            )
          })}
      </div>)
    ;
  }
}

export default RentalList;
