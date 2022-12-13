import React from "react";
import "./Tickets.css";
import ProductItem from "./productItem/ProductItem";
import withContext from "../../../withContext";
import { products } from "./TicketData";
  
const Tickets = () => {
  // const { products } = props.context;
  return (
    <div className="Tickets">
     <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                // addToCart={products.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>  
  );
};
export default withContext(Tickets);