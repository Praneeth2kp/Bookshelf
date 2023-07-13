import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      <p>Total Items: {cartItems.length}</p>
      <Link to="/cart">
  <button>View Cart</button>
</Link>

    </div>
  );
}

export default Cart;
