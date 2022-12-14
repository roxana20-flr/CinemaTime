import React from "react";

const CartItem = props => {

  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.09;
  const shippingPrice = itemsPrice > 200 ? 0 : 2;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;


  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price.toFixed(2)} Lei
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">{itemsPrice.toFixed(2)} Lei</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">{taxPrice.toFixed(2)} Lei</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                {shippingPrice.toFixed(2)} Lei
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)} Lei</strong>
              </div>
            </div>
          </>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;