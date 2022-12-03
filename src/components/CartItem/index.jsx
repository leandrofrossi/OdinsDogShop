import React, { useContext } from 'react'
import { Shop } from '../../contexts/Shop'
import TrashIcon from '../TrashIcon'

const CartItem = ({item}) => {

  const {removeProduct} = useContext(Shop);

  const deleteProd = () => {
    removeProduct(item.id)
  };

  return (
    <div>
        <img src ={item.image} alt='cart-item'/>
        <h1>{item.name}</h1>        
        <p>{item.quantity}</p>
        <div onClick={deleteProd}>
          <TrashIcon />
        </div>
    </div>
  );
};

export default CartItem;