import React from "react";
import "./Cart.css";
import CartItem from '../cart/cartItem/CartItem';

  
const Cart = (props) => {

  const { cartItems, onAdd, onRemove } = props;

  return (
    <div className="Cart">
     <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">My Cart</h4>
        </div>
      </div>
      <br />
      <div className="container">
          <div className="column columns is-multiline">
              <CartItem
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  className="button is-warning "
                >
                  Clear cart
                </button>{" "}
                <button
                  className="button is-success"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="column">
            {/* <div className="title has-text-grey-light">No item in cart!</div> */}
          </div>
      </div>
    </div>  
  );
};
export default Cart;