import React from "react";

function CownProduct () {
    return (
<div className="mini-cart-item d-flex border-bottom pb-3">
  <div className="col-lg-2 col-md-3 col-sm-2 me-4">
    <a href="#" title="product-image">
      <img src="images/single-product-thumb1.jpg" className="img-fluid" alt="single-product-item" />
    </a>
  </div>
  <div className="col-lg-9 col-md-8 col-sm-8">
    <div className="product-header d-flex justify-content-between align-items-center mb-3">
      <h4 className="product-title fs-6 me-5">Sport Shoes For Men</h4>
      <a href className="remove" aria-label="Remove this item" data-product_id={11913} data-cart_item_key="abc" data-product_sku>
        <svg className="close">
          <use xlinkHref="#close" />
        </svg>
      </a>
    </div>
    <div className="quantity-price d-flex justify-content-between align-items-center">
      <div className="input-group product-qty">
        <button type="button" className="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number" data-type="minus">
          <svg width={16} height={16}>
            <use xlinkHref="#minus" />
          </svg>
        </button>
        <input type="text" name="quantity" className="form-control input-number quantity" defaultValue={1} />
        <button type="button" className="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number" data-type="plus">
          <svg width={16} height={16}>
            <use xlinkHref="#plus" />
          </svg>
        </button>
      </div>
      <div className="price-code">
        <span className="product-price fs-6">$99</span>
      </div>
    </div>
    {/* quantity-price */}
  </div>
</div>

    )
}

export default CownProduct;