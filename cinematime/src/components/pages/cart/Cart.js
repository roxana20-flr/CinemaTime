import React from "react";
import "./Cart.css";
import withContext from '../../../withContext';
import CartItem from '../cart/cartItem/CartItem';

  
const Cart = (props) => {
    // const { cart } = props.context;
  // const cartKeys = Object.keys(cart || {});

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
        {/* {cartKeys.length ? ( */}
          <div className="column columns is-multiline">
            {/* {cartKeys.map(key => ( */}
              <CartItem
                // cartKey={key}
                // key={key}
                // cartItem={cart[key]}
                cartItems={cartItems}
                // removeFromCart={props.context.removeFromCart}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            {/* ))} */}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  // onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  Clear cart
                </button>{" "}
                <button
                  className="button is-success"
                  // onClick={props.context.checkout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        {/* ) : ( */}
          <div className="column">
            <div className="title has-text-grey-light">No item in cart!</div>
          </div>
        {/* )} */}
      </div>
    </div>  
  );
};
export default Cart;