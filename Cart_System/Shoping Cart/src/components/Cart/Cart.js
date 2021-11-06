import React from 'react';
import Model from '../UI/Model';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Model onCancel={props.onCancel}>
      {cartItems}
      <div className={classes.summary}>
        <span className={classes.total}>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCancel}>
          Cancel
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
}

export default Cart;