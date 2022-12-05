import React, { useContext } from 'react'
import { Shop } from '../../contexts/Shop'
import TrashIcon from '../TrashIcon'
import './styles.css';

const CartItem = ({item}) => {

  const {removeProduct} = useContext(Shop);

  const deleteProd = () => {
    removeProduct(item.id)
  };

  return (
    <div className='cartContainer'>
        <img className='cartImage' src ={item.image} alt='cart-item'/>
        <h1>{item.name} (${item.precio})</h1>        
        <p>{item.stock}</p>
        <p>Subotal ${item.stock*item.precio}</p>
        <div className='trash' onClick={deleteProd}>
          <TrashIcon />
        </div>
    </div>
  );
};

export default CartItem;