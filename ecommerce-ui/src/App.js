import './App.css';
import RentalList from './components/RentalList';
import airbnbs from './_data/airbnbs.json';
import ShoppingCart from './components/ShoppingCart';
import CartToggler from './components/CartToggler';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rentals: airbnbs,
      isCartVisible: true,
      itemCount: 0
    };
  }

  onRemoveFromCart = (title) => {
    return () => {
      const selectedRental = this.state.rentals.find(r => r.title === title);
      const index = this.state.rentals.indexOf(selectedRental);
      this.updateState(selectedRental, index);
    }
  }

  onAddToCart = (index) => {
    return () => {
      const selectedRental = this.state.rentals[index];
      this.updateState(selectedRental, index);
    }
  }

  updateState(selectedRental, index) {
    selectedRental.isInCart = !selectedRental.isInCart;
    const udpatedRentals = [
      ...this.state.rentals.slice(0, index),
      selectedRental,
      ...this.state.rentals.slice(index + 1)
    ];

    this.setState({
      rentals: udpatedRentals,
      itemCount: this.state.rentals.filter(r => r.isInCart).length
    });
  }

  onToggleCart = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible
    });
  }

  render() {
    return (
      <>
      <div className="container appContainer text-right">
        <CartToggler isCartVisible={this.state.isCartVisible} onToggleCart={this.onToggleCart} itemCount={this.state.itemCount} />
      </div>

      <div className="container appContainer">
        <RentalList rentals={this.state.rentals} onAddToCart={this.onAddToCart} />
        <ShoppingCart items={this.state.rentals} onRemoveItem={this.onRemoveFromCart} isVisible={this.state.isCartVisible} />
      </div>
      </>
    );
  }
}

export default App;
