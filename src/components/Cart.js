// src/components/Header.js (or wherever you want to add the cart icon)
import React from 'react';
import { useCart } from './CartContext';

function Header() {
  const { getCartCount } = useCart();  // Access the cart count function

  return (
    <header>
      <ul className="nav">
        {/* Other navigation items */}
        <li className="pe-3">
          <a href="#" data-bs-toggle="modal" data-bs-target="#modallong" className="border-0">
            <svg className="shopping-cart" width={24} height={24}>
              <use xlinkHref="#shopping-cart" />
            </svg>
            <span className="cart-count">{getCartCount()}</span> {/* Display the cart count */}
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
