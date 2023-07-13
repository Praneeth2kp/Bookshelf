import React from 'react';

function CartPage({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>Title: {item.volumeInfo.title}</p>
              <p>Author(s): {item.volumeInfo.authors?.join(', ')}</p>
              {/* Add more details or formatting as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;

