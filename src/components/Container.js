import React from "react";

function Container (){
    return (
<section id="intro" className="position-relative mt-4">
  <div className="container-lg">
    <div className="swiper main-swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="card d-flex flex-row align-items-end border-0 large jarallax-keep-img">
            <img src="images/card-image1.jpg" alt="shoes" className="img-fluid jarallax-img" />
            <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
              <h2 className="card-title display-3 light">Stylish shoes for Women</h2>
              <a href="index.html" className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="row g-4">
            <div className="col-lg-12 mb-4">
              <div className="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                <img src="images/card-image2.jpg" alt="shoes" className="img-fluid jarallax-img" />
                <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                  <h2 className="card-title style-2 display-4 light">Sports Wear</h2>
                  <a href="index.html" className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                <img src="images/card-image3.jpg" alt="shoes" className="img-fluid jarallax-img" />
                <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                  <h2 className="card-title style-2 display-4 light">Fashion Shoes</h2>
                  <a href="index.html" className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card d-flex flex-row align-items-end border-0 large jarallax-keep-img">
            <img src="images/card-image4.jpg" alt="shoes" className="img-fluid jarallax-img" />
            <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
              <h2 className="card-title display-3 light">Stylish shoes for men</h2>
              <a href="index.html" className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="row g-4">
            <div className="col-lg-12 mb-4">
              <div className="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                <img src="images/card-image5.jpg" alt="shoes" className="img-fluid jarallax-img" />
                <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                  <h2 className="card-title style-2 display-4 light">Men Shoes</h2>
                  <a href="index.html" className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                <img src="images/card-image6.jpg" alt="shoes" className="img-fluid jarallax-img" />
                <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                  <h2 className="card-title style-2 display-4 light">Women Shoes</h2>
                  <a href="index.html" className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-pagination" />
  </div>
</section>

    )
}

export default Container