import React from "react";
import { useCart } from "./CartContext"; // Import the custom hook for the cart context

function Header() {
  const { getCartCount } = useCart(); // Get the cart item count

  return (
    <header id="header" className="site-header text-black">
      <div className="header-top border-bottom py-2">
        <div className="container-lg">
          <div className="row justify-content-evenly">
            <div className="col">
              <ul className="social-links list-unstyled d-flex m-0">
                <li className="pe-2">
                  <a href="#">
                    <svg className="facebook" width={20} height={20}>
                      <use xlinkHref="#facebook" />
                    </svg>
                  </a>
                </li>
                <li className="pe-2">
                  <a href="#">
                    <svg className="instagram" width={20} height={20}>
                      <use xlinkHref="#instagram" />
                    </svg>
                  </a>
                </li>
                <li className="pe-2">
                  <a href="#">
                    <svg className="youtube" width={20} height={20}>
                      <use xlinkHref="#youtube" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg className="pinterest" width={20} height={20}>
                      <use xlinkHref="#pinterest" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col d-none d-md-block">
              <p className="text-center text-black m-0"><strong>Special Offer</strong>: Free Shipping on all the orders above $100</p>
            </div>
            <div className="col">
              <ul className="d-flex justify-content-end gap-3 list-unstyled m-0">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav id="header-nav" className="navbar navbar-expand-lg">
        <div className="container-lg">
          <a className="navbar-brand" href="index.html">
            <img src="images/main-logo.png" className="logo" alt="logo" />
          </a>
          <button className="navbar-toggler d-flex d-lg-none order-3 border-0 p-1 ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <svg className="navbar-icon">
              <use xlinkHref="#navbar-icon" />
            </svg>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="bdNavbar">
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand ps-3" href="index.html">
                <img src="images/main-logo.png" className="logo" alt="logo" />
              </a>
              <button type="button" className="btn-close btn-close-black p-5" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar" />
            </div>
            <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav fw-bold justify-content-end align-items-center flex-grow-1">
                <li className="nav-item dropdown">
                  <a className="nav-link me-5 active dropdown-toggle border-0" href="#" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                  <ul className="dropdown-menu fw-bold">
                    <li>
                      <a href="index.html" className="dropdown-item">Home V1</a>
                    </li>
                    <li>
                      <a href="index.html" className="dropdown-item">Home V2</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-5" href="#">Men</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-5" href="#">Women</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link me-5 active dropdown-toggle border-0" href="#" data-bs-toggle="dropdown" aria-expanded="false">Page</a>
                  <ul className="dropdown-menu fw-bold">
                    <li>
                      <a href="index.html" className="dropdown-item">About Us</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index.html">Shop</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index.html">Blog</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index.html">Single Product</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index.html">Single Post</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="index.html">Styles</a>
                    </li>
                    <li>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#modallong" className="dropdown-item">cart</a>
                    </li>
                    <li>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#modallogin" className="dropdown-item">Login</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-5" href="index.html">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-5" href="#">Sale</a>
                </li>
              </ul>
            </div>
          </div>

          {/* User Items (Cart and Login) */}
          <div className="user-items ps-0 ps-md-5">
            <ul className="d-flex justify-content-end list-unstyled align-item-center m-0">
              <li className="pe-3">
                <a href="login" data-bs-toggle="modal" data-bs-target="#modallogin" className="border-0">
                  <svg className="user" width={24} height={24}>
                    <use xlinkHref="#user" />
                  </svg>
                </a>
              </li>
              <li className="pe-3">
                <a href="#" data-bs-toggle="modal" data-bs-target="#modallong" className="border-0">
                  <svg className="shopping-cart" width={24} height={24}>
                    <use xlinkHref="#shopping-cart" />
                  </svg>
                  {/* Display cart item count next to cart icon */}
                  {getCartCount() > 0 && (
                    <span className="cart-count">{getCartCount()}</span>
                  )}
                </a>
              </li>
              <li>
                <a href="#" className="search-item border-0" data-bs-toggle="collapse" data-bs-target="#search-box" aria-label="Toggle navigation">
                  <svg className="search" width={24} height={24}>
                    <use xlinkHref="#search" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
