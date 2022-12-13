import {React, useState} from "react";
import "./Tickets.css";
import ProductItem from "./productItem/ProductItem";

import PropTypes from 'prop-types';
  
const Tickets = ( props ) => {
  const { products, onAdd } = props;
  const imagePerRow = 16;
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };


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