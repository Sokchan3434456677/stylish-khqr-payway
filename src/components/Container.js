import React, { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Container() {
  useEffect(() => {
    const swiper = new Swiper('.main-swiper', {
      modules: [Pagination],
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      speed: 600,
      spaceBetween: 0,
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section id="intro" className="position-relative mt-4">
      <div className="container-lg">
        <div className="swiper main-swiper">
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="card">
                <img src="images/card-image1.jpg" alt="Stylish shoes for Women" className="slide-img" />
                <div className="card-content">
                  <h2>Stylish Shoes for Women</h2>
                  <a href="index.html" className="shop-link">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Slide 2 - Two cards */}
            <div className="swiper-slide">
              <div className="row g-0">
                <div className="col-12 mb-3">
                  <div className="card">
                    <img src="images/card-image2.jpg" alt="Sports Wear" className="slide-img" />
                    <div className="card-content">
                      <h2>Sports Wear</h2>
                      <a href="index.html" className="shop-link">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <img src="images/card-image3.jpg" alt="Fashion Shoes" className="slide-img" />
                    <div className="card-content">
                      <h2>Fashion Shoes</h2>
                      <a href="index.html" className="shop-link">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="card">
                <img src="images/card-image4.jpg" alt="Stylish shoes for men" className="slide-img" />
                <div className="card-content">
                  <h2>Stylish Shoes for Men</h2>
                  <a href="index.html" className="shop-link">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Slide 4 - Two cards */}
            <div className="swiper-slide">
              <div className="row g-0">
                <div className="col-12 mb-3">
                  <div className="card">
                    <img src="images/card-image5.jpg" alt="Men Shoes" className="slide-img" />
                    <div className="card-content">
                      <h2>Men Shoes</h2>
                      <a href="index.html" className="shop-link">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <img src="images/card-image6.jpg" alt="Women Shoes" className="slide-img" />
                    <div className="card-content">
                      <h2>Women Shoes</h2>
                      <a href="index.html" className="shop-link">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>

      {/* Responsive CSS Styles */}
      <style jsx>{`
        .main-swiper {
          width: 100%;
          overflow: hidden;
          max-width: 1200px; /* Limits width on large screens */
          margin: 0 auto;
        }

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          position: relative;
          width: 100%;
          max-width: 600px; /* Smaller max width for single cards */
          border: none;
          overflow: hidden;
          background: #ffffff;
        }

        .slide-img {
          width: 100%;
          height: 300px; /* Fixed height for consistency */
          object-fit: cover; /* Ensures images scale nicely */
          display: block;
        }

        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 15px 20px;
          background: rgba(255, 255, 255, 0.9);
          text-align: left;
        }

        .card-content h2 {
          margin: 0 0 10px 0;
          font-size: 1.5rem; /* Smaller, readable font */
          font-weight: 600;
          color: #333333;
          line-height: 1.2;
        }

        .shop-link {
          display: inline-block;
          padding: 8px 16px;
          background: #333333;
          color: #ffffff;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 1px;
          transition: background 0.3s ease;
        }

        .shop-link:hover {
          background: #555555;
          color: #ffffff;
          text-decoration: none;
        }

        .swiper-pagination {
          position: relative;
          margin-top: 15px;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cccccc;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: #333333;
          opacity: 1;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .card {
            max-width: 100%; /* Full width on smaller screens */
          }

          .slide-img {
            height: 200px; /* Smaller height for tablets/mobile */
          }

          .card-content {
            padding: 10px 15px;
          }

          .card-content h2 {
            font-size: 1.2rem;
          }

          .shop-link {
            padding: 6px 12px;
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .slide-img {
            height: 150px; /* Even smaller for phones */
          }

          .card-content h2 {
            font-size: 1rem;
          }

          .shop-link {
            padding: 5px 10px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Container;