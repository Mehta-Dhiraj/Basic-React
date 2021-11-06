import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultcartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItem = state.items.concat(action.item);
        const updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
          items: updatedItem,
          totalAmount: updatedtotalAmount,
        };
    }
    return defaultcartState;
};




const CartProvider = (props) => {

    const [cartSatate, dispatchCartAction] = useReducer(cartReducer, defaultcartState);

    const addItemHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };


    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartSatate.items,
        totalAmount: cartSatate.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
};

export default CartProvider;

