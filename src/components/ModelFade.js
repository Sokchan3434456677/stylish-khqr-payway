


// import React, { useState } from 'react';
// import { useCart } from './CartContext';

// function CartModal() {
//   const { cart, removeFromCart } = useCart();
//   const [qrImage, setQrImage] = useState(null);
//   const [transactionUrl, setTransactionUrl] = useState(null);
//   const [error, setError] = useState(null); // Added for error display
//   const [loading, setLoading] = useState(false); // Added for loading state

//   const totalAmount = cart.reduce(
//     (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
//     0
//   );
  
//   const generateToken = async () => {
//     const tokenUrl = '/api/oauth/token'; // Use the proxy endpoint
//     const clientId = '9501d6df-d0c3-4f33-8bf1-eee5cc7a486e';
//     const clientSecret = '59Pr4UuXwkfZX7QDVOh143Vq3UEEmplEEPvJmT2T';
  
//     try {
//       const response = await fetch(tokenUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           grant_type: 'client_credentials',
//           client_id: clientId,
//           client_secret: clientSecret,
//           scope: 'txn-create',
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Token generation failed! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log('Token Response:', data);
//       return data.access_token;
//     } catch (error) {
//       throw error;
//     }
//   };


//   const handlePhillipBankCheckout = async () => {
//     setLoading(true); // Show loading state
//     setError(null); // Reset error state
//     try {
//       // Generate token
//       const token = await generateToken();

//       // Prepare transaction
//       const transactionId = `INV_${Math.floor(Date.now() / 1000)}`;
//       const amount = totalAmount.toFixed(2);

//       const transactionData = {
//         partner_id: 'banhji',
//         merchant_id: '55368',
//         merchant_name: 'HENG Sothon',
//         merchant_city: 'Phnom Penh',
//         merchant_category: '5691',
//         merchant_rdn: 'https://www.sample.com/en',
//         phone: '010888664',
//         payload: cart.map((item) => item.title).join(','),
//         txn_id: transactionId,
//         label: 'Invoice No',
//         currency: 'USD',
//         amount: amount,
//         fee: 0.0,
//         country_code: 'KH',
//         success_redirect: `https://www.sample.com.kh/api/confirm-paymentgateways?tran_id=${transactionId}&status=success`,
//         fail_redirect: `https://www.sample.com.kh/api/confirm-paymentgateways?tran_id=${transactionId}&status=fail`,
//       };

//       // Initiate transaction
//       const response = await fetch('https://api-uat145.phillipbank.com.kh:8441/api/init/transaction', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(transactionData),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Transaction failed! Status: ${response.status}, Details: ${errorText}`);
//       }

//       const data = await response.json();
//       console.log('Transaction Response:', data); // Debug API response

//       if (data.success) {
//         setTransactionUrl(data.data.url);
//         setQrImage(data.data.qr);
//         if (!data.data.qr) {
//           setError('QR code not received from API');
//         }
//       } else {
//         setError(`Transaction failed: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Checkout Error:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false); // Hide loading state
//     }
//   };

//   if (cart.length === 0) {
//     return <div>Your cart is empty.</div>;
//   }

//   return (
//     <div className="modal fade" id="modallong" tabIndex={-1} aria-labelledby="modallongLabel" aria-hidden="true">
//       <div className="modal-dialog modal-lg">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="modallongLabel">Your Cart</h5>
//             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div className="modal-body">
//             <ul>
//               {cart.map((item, index) => (
//                 <li key={index} className="cart-item">
//                   <span>
//                     {item.title} - ${item.price} x {item.quantity}
//                     <br />
//                     <small>Chapter: {item.chapterName}</small>
//                   </span>
//                   <button
//                     onClick={() => removeFromCart(item)}
//                     className="btn btn-danger btn-sm ms-2"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="d-flex justify-content-between">
//               <span><strong>Total:</strong> ${totalAmount.toFixed(2)}</span>
//             </div>

//             {loading && <div className="mt-3">Processing...</div>}
//             {error && <div className="mt-3 text-danger">Error: {error}</div>}
            
//             {qrImage ? (
//               <div className="mt-3">
//                 <h6>Scan QR Code to Pay</h6>
//                 <img src={`data:image/png;base64,${qrImage}`} alt="QR Code" style={{ width: '200px', height: '200px' }} />
//               </div>
//             ) : (
//               !loading && !error && qrImage === null && (
//                 <div className="mt-3">No QR code generated yet</div>
//               )
//             )}

//             {transactionUrl && (
//               <div className="mt-3">
//                 <h6>Or click the link below to complete the payment:</h6>
//                 <a href={transactionUrl} target="_blank" rel="noopener noreferrer">Complete Payment</a>
//               </div>
//             )}
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={handlePhillipBankCheckout}
//               disabled={loading}
//             >
//               {loading ? 'Processing...' : 'Checkout with PhillipBank'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartModal;



import React, { useState } from 'react';
import { useCart } from './CartContext';

function CartModal() {
  const { cart, removeFromCart } = useCart();
  const [qrImage, setQrImage] = useState(null);
  const [transactionUrl, setTransactionUrl] = useState(null);
  const [error, setError] = useState(null); // Added for error display
  const [loading, setLoading] = useState(false); // Added for loading state

  const totalAmount = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  );
  
  const generateToken = async () => {
    const tokenUrl = '/api/oauth/token'; // Use the proxy endpoint
    const clientId = '9501d6df-d0c3-4f33-8bf1-eee5cc7a486e';
    const clientSecret = '59Pr4UuXwkfZX7QDVOh143Vq3UEEmplEEPvJmT2T';
  
    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret,
          scope: 'txn-create',
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Token generation failed! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Token Response:', data);
      return data.access_token;
    } catch (error) {
      throw error;
    }
  };

  const handlePhillipBankCheckout = async () => {
    setLoading(true); // Show loading state
    setError(null); // Reset error state
    try {
      // Generate token
      const token = await generateToken();

      // Prepare transaction
      const transactionId = `INV_${Math.floor(Date.now() / 1000)}`;
      const amount = totalAmount.toFixed(2);

      const transactionData = {
        partner_id: 'banhji',
        merchant_id: '55368',
        merchant_name: 'HENG Sothon',
        merchant_city: 'Phnom Penh',
        merchant_category: '5691',
        merchant_rdn: 'https://www.sample.com/en',
        phone: '010888664',
        payload: cart.map((item) => item.title).join(','),
        txn_id: transactionId,
        label: 'Invoice No',
        currency: 'USD',
        amount: amount,
        fee: 0.0,
        country_code: 'KH',
        success_redirect: `https://www.sample.com.kh/api/confirm-paymentgateways?tran_id=${transactionId}&status=success`,
        fail_redirect: `https://www.sample.com.kh/api/confirm-paymentgateways?tran_id=${transactionId}&status=fail`,
      };

      // Initiate transaction
      // Replace the URL below with your new endpoint or remove this block if no longer needed
      const response = await fetch({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(transactionData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Transaction failed! Status: ${response.status}, Details: ${errorText}`);
      }

      const data = await response.json();
      console.log('Transaction Response:', data); // Debug API response

      if (data.success) {
        setTransactionUrl(data.data.url);
        setQrImage(data.data.qr);
        if (!data.data.qr) {
          setError('QR code not received from API');
        }
      } else {
        setError(`Transaction failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Checkout Error:', error);
      setError(error.message);
    } finally {
      setLoading(false); // Hide loading state
    }
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

            {loading && <div className="mt-3">Processing...</div>}
            {error && <div className="mt-3 text-danger">Error: {error}</div>}
            
            {qrImage ? (
              <div className="mt-3">
                <h6>Scan QR Code to Pay</h6>
                <img src={`data:image/png;base64,${qrImage}`} alt="QR Code" style={{ width: '200px', height: '200px' }} />
              </div>
            ) : (
              !loading && !error && qrImage === null && (
                <div className="mt-3">No QR code generated yet</div>
              )
            )}

            {transactionUrl && (
              <div className="mt-3">
                <h6>Or click the link below to complete the payment:</h6>
                <a href={transactionUrl} target="_blank" rel="noopener noreferrer">Complete Payment</a>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePhillipBankCheckout}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Checkout with PhillipBank'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
