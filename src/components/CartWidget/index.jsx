import React, { useContext }  from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";
import CartIcon from "../CartIcon";
import { Shop } from "../../contexts/Shop";

const CartWidget = () => {
      const navigate = useNavigate();

      const {totalItemsCart} = useContext(Shop);

  return (
    <div className='cart' onClick ={()=> navigate("/cart")}>
        <CartIcon/>
        <span>{totalItemsCart() === 0 ? null : `[${totalItemsCart()}]`}</span>   
    </div> 
  );
};

export default CartWidget;