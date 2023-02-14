import './CartAsideElements.scss';
import { cartsData } from '../header/headerCartSlice';
import { useSelector } from 'react-redux';
import React from 'react';

const CartAsideElements = () => {
  const cartItems = useSelector(cartsData);
  return (
    <>
      {cartItems.map((item:any) => (
        <li className="listOfCarts">
          <div className="list-img">
            <img src={item.image} alt="bowl" />
          </div>
          <div className="list-content">
            <p>{item.name}</p>
            <p>QTY: {item.cartQuantity}</p>
            <p>${item.price}</p>
          </div>
        </li>
      ))}
    </>
  );
};

export default CartAsideElements;
