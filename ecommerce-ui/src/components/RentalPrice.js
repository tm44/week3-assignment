import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RentalPrice = (props) => {

  Component.propTypes = {
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }
  return (
    <>
    <div><span className="rentalDollars text-primary">${props.price}</span> <small>/ night</small></div>
    {!!props.description && props.description.length > 1 && <div className="text-success"><small>&#9733; {props.description}</small></div>}
    </>
  );
}

export default RentalPrice;
