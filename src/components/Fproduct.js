

import React, { useState } from 'react';
import ModelFade from './ModelFade'; // Import the modal component
import { useCart } from './CartContext'; // Import the cart context
import useFetch from './hooks/useFetch'; // Custom hook for fetching products

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/products';

function Fproduct() {
  const { data: products, error, loading } = useFetch(API_URL); // Using custom hook for fetching data
  const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product for the modal
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const { addToCart, getTotalPrice } = useCart(); // Get the addToCart function and total price from context

  const openModal = (product) => {
    setSelectedProduct(product); // Set the selected product for the modal
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
    setSuccessMessage(`"${product.name}" has been added to your cart!`); // Set the success message

    // Remove the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  if (loading) {
    return <div className="loading-message">Loading products...</div>; // Show loading state while fetching
  }

  if (error) {
    return <div className="error-message">Error fetching products: {error}</div>; // Show error message if API request fails
  }

  return (
    <div>
      <section id="featured-products" className="product-store">
        <div className="container-md">
          <div className="display-header d-flex align-items-center justify-content-between">
            <h2 className="section-title text-uppercase">Featured Products</h2>
            <div className="btn-right">
              <a href="index.html" className="d-inline-block text-uppercase text-hover fw-bold">
                View all
              </a>
            </div>
          </div>

          <ProductList
            products={products}
            onAddToCart={handleAddToCart}
            onOpenModal={openModal}
          />
        </div>
      </section>

      {/* Show success message if it's available */}
      {successMessage && (
        <div className="alert alert-success fixed-bottom mb-4 mx-auto w-75 text-center" role="alert">
          {successMessage}
        </div>
      )}

      {/* Show total price */}
      <div className="total-price text-center mt-3">
        <h4>Total: ${getTotalPrice().toFixed(2)}</h4> {/* Display the total price */}
      </div>

      {/* Pass the selected product to the modal */}
      {selectedProduct && (
        <ModelFade selectedProduct={selectedProduct} addToCart={addToCart} />
      )}
    </div>
  );
}

const ProductList = ({ products, onAddToCart, onOpenModal }) => (
  <div className="product-content padding-small">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
      {products?.map((product) => (
        <div className="col mb-4" key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} onOpenModal={onOpenModal} />
        </div>
      ))}
    </div>
  </div>
);

const ProductCard = ({ product, onAddToCart, onOpenModal }) => (
  <div className="product-card position-relative">
    <div className="card-img">
      <img
        src={product.imgSrc}
        alt={product.name}
        className="product-image img-fluid"
        style={{ width: '100%', height: '300px' }}
      />
      <div className="cart-concern position-absolute d-flex justify-content-center">
        <div className="cart-button d-flex gap-2 justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => onAddToCart(product)} // Add product to cart and show success
          >
            <svg className="shopping-carriage">
              <use xlinkHref="#shopping-carriage" />
            </svg>
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => onOpenModal(product)} // Set the selected product for the modal
          >
            <svg className="quick-view">
              <use xlinkHref="#quick-view" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="card-detail d-flex justify-content-between align-items-center mt-3">
      <h3 className="card-title fs-6 fw-normal m-0">
        <a href="index.html">{product.name}</a>
      </h3>
      <span className="card-price fw-bold">{product.price}</span>
    </div>
  </div>
);

export default Fproduct;
