import React from "react";

interface CardShopType {
  item: Product
}

const CardShop = ({ item }: CardShopType) => {
  return (
    <div className="card-shop col-12 col-sm-8 col-md-6 col-lg-3">
      <div className="card">
        <img className="card-img" src={item.path} alt="Vans" />
        <div className="card-img-overlay d-flex justify-content-end">
          <a href="#" className="card-link text-danger like">
            <i className="fas fa-heart"></i>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          {/* <h6 className="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6> */}
          <p className="card-text">
            {item.description}
            {/* The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool. */}
          </p>

          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success"><h5 className="mt-4">${item.price}</h5></div>
            <a href="#" className="btn btn-danger mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CardShop;