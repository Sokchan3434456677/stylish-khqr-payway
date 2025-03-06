



import React, { useState } from 'react';
import { useCart } from './CartContext';

function CartModal() {
  const { cart, removeFromCart } = useCart();
  const [qrImage, setQrImage] = useState(null);

  const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  const handleABACheckout = async () => {
    const items = cart.map(item => ({
      name: item.title,
      quantity: item.quantity.toString(),
      price: parseFloat(item.price.replace('$', '')).toFixed(2),
    }));

    const req_time = Math.floor(Date.now() / 1000);
    const transactionId = req_time.toString();
    const amount = totalAmount.toFixed(2);
    const firstName = 'Customer';
    const lastName = 'Name';
    const phone = '123456789';
    const email = 'customer@example.com';
    const return_params = 'Hello World!';
    const type = 'purchase';
    const currency = 'USD';
    const shipping = '0.00';

    const hashInput = req_time + ABA_PAYWAY_MERCHANT_ID + transactionId + amount + JSON.stringify(items) + shipping + firstName + lastName + email + phone + type + currency + return_params;
    const hash = await generateHash(hashInput);

    try {
      const response = await fetch(ABA_PAYWAY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hash,
          tran_id: transactionId,
          amount,
          firstname: firstName,
          lastname: lastName,
          phone,
          email,
          items: JSON.stringify(items),
          return_params,
          shipping,
          currency,
          type,
          merchant_id: ABA_PAYWAY_MERCHANT_ID,
          req_time,
          return_param: return_params,
        }),
      });

      const data = await response.json();

      if (data.status.code === '00') {
        setQrImage(data.qrImage);
      } else {
        console.error('Payment failed:', data.status.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const generateHash = async (input) => {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(ABA_PAYWAY_API_KEY),
      { name: 'HMAC', hash: 'SHA-512' },
      false,
      ['sign']
    );
    const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(input));
    return btoa(String.fromCharCode(...new Uint8Array(signature)));
  };

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
            {qrImage && (
              <div className="mt-3">
                <h6>Scan QR Code to Pay</h6>
                <img src={qrImage} alt="QR Code" style={{ width: '200px', height: '200px' }} />
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleABACheckout}
            >
              Checkout with ABA Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;

const ABA_PAYWAY_API_URL = 'https://checkout-sandbox.payway.com.kh/api/payment-gateway/v1/payments/purchase';
const ABA_PAYWAY_API_KEY = '096b56dee15c4ce58e56658f568a7b73551b3c77';
const ABA_PAYWAY_MERCHANT_ID = 'ec449300';