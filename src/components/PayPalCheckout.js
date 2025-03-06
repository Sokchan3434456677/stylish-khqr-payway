// // src/components/PayPalCheckout.js
import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';  // PayPal button from the library

const PayPalCheckout = ({ amount }) => {
  const [paidFor, setPaidFor] = useState(false);  // Track payment success state

  // Handle when payment is approved
  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      setPaidFor(true);  // Payment was successful
      alert("Payment Successful! Transaction ID: " + details.id);
    });
  };

  // Handle errors during payment process
  const handleError = (error) => {
    console.error("Error during payment: ", error);
    alert("Payment failed. Please try again.");
  };

  return (
    <div>
      <h2>Pay with PayPal</h2>
      {paidFor ? (
        <div>Payment Successful!</div>
      ) : (
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,  // Pass the total cart value here
                  },
                },
              ],
            });
          }}
          onApprove={handleApprove}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default PayPalCheckout;




{/* <script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID"></script> */}
