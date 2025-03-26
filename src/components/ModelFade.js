import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';

function CartModal() {
  const { cart, removeFromCart } = useCart();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Calculate total amount
  const totalAmount = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );

  // Handle Payway Checkout
  const handlePaywayCheckout = () => {
    setLoading(true);
    setError(null);

    try {
      // Construct the Payway URL with dynamic amount
      const paywayBaseUrl = 'https://link.payway.com.kh/aba?id=DDCDBF42E545&code=688814&acc=007265828&dynamic=true';
      const amountInCents = Math.round(totalAmount); // Convert to cents if required by Payway
      const paymentUrl = `${paywayBaseUrl}&amount=${amountInCents}`;

      // Open the payment URL in a new tab
      window.open(paymentUrl, '_blank');

      // Note: Since this is a redirect-based payment, we can't automatically poll for status
      // You might want to add a manual confirmation step after payment
      alert('Please complete the payment in the new tab. After payment, return here to confirm.');
    } catch (error) {
      console.error('Payway Checkout Error:', error);
      setError('Failed to initiate payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Render empty cart message if cart is empty
  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="modal fade" id="modallong" tabIndex={-1} aria-labelledby="modallongLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modallongLabel">Your Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <span>
                    {item.title} - ${item.price} x {item.quantity}
                    <br />
                    <small>Chapter: {item.chapterName}</small>
                  </span>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="btn btn-danger btn-sm ms-2"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between">
              <span><strong>Total:</strong> ${totalAmount.toFixed(2)}</span>
            </div>

            {loading && <div className="mt-3">Processing...</div>}
            {error && <div className="mt-3 text-danger">Error: {error}</div>}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePaywayCheckout}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Checkout with Payway'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
