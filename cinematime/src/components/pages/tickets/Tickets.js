import {React, useState} from "react";
import "./Tickets.css";
import ProductItem from "./productItem/ProductItem";
import withContext from "../../../withContext";
import { products } from "./TicketData";

import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
  
const Tickets = ( props ) => {
  // const { products} = props;
  const { products, onAdd } = props;
  const imagePerRow = 16;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  // const onAddToCart = () => {
  //   addToCart();
  // };

  return (
    <div className="Tickets">
     <div >
        <div >
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div >
        <div className="gap-y-4 flex flex-wrap justify-center">
          {products && products.length ? (
          products?.slice(0, next)?.map((product, index) => (
              <ProductItem
              product={product}
              key={index}
              // addToCart={products.context.addToCart}
              onAdd={onAdd}
              />
            )) 
          ) : (
            <div >
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
          {next < products?.length && (
            <div>
          <button
            className="mt-4"
            onClick={handleMoreImage}
          >
            Load more
          </button>
          </div>
        )}
        </div>
      </div>
    </div>  
  );
};
export default Tickets;

Tickets.propTypes = {
  onAddToCart: PropTypes.func,
};