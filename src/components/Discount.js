import React from "react";

function Discount (){
    return(
        <div>
            <section className="discount-coupon py-2 my-2 py-md-5 my-md-5">
  <div className="container">
    <div className="bg-gray coupon position-relative p-5">
      <div className="bold-text position-absolute">10% OFF</div>
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-7 col-md-12 mb-3">
          <div className="coupon-header">
            <h2 className="display-7">10% OFF Discount Coupons</h2>
            <p className="m-0">Subscribe us to get 10% OFF on all the purchases</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          <div className="btn-wrap">
            <a href="#" className="btn btn-black btn-medium text-uppercase hvr-sweep-to-right">Email me</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Discount;