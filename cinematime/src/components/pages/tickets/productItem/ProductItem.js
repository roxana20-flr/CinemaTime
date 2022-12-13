import React from "react";
import './ProductItem.css';

const ProductItem = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="ProjectsMyWorkText  ProjectsMyWork">
      <div >
        <div >
          <div >
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt={product.shortDesc}
              />
            </figure>
          </div>
          <div >
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span >${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            {product.stock > 0 ? (
              <small>{product.stock + " Available"}</small>
            ) : (
              <small >Out Of Stock</small>
            )}
            <div >
              <button
              onClick={() => onAdd(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
