import React from "react";

function Searchbox (){
    return(
        <div className="search-box bg-dark position-relative">
  <div className="search-wrap">
    <div className="close-button">
      <svg className="close" style={{fill: 'white'}}>
        <use xlinkHref="#close" />
      </svg>
    </div>
    <form id="search-form" className="text-lg-center text-md-left pt-3" action="index.html" method="get">
      <input type="text" className="search-input" placeholder="Search..." />
      <svg className="search">
        <use xlinkHref="#search" />
      </svg>
    </form>
  </div>
</div>

    )
}
export default Searchbox;