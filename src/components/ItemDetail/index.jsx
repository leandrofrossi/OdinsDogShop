import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import ItemCount from "../ItemCount";
import './styles.css';

const ItemDetail = ({ product }) => {  
  const {addProduct} = useContext(Shop);

  const [quantityItemDetail, setQuantityItemDetail] = useState(0);

  const navigate = useNavigate();

  const confirmPurchase = (quantity) => {     
    addProduct({...product, quantity})   
    setQuantityItemDetail(quantity);
  };

  const navigateCart = () => {
    navigate('/cart')
  };

  const navigateHome = () => {
    navigate('/')
  };

  return (
        <div className="item-detail-container">
          <div className="item-detail">  
            <img src={product.image} width={250} height={300}alt="detail" />
            <div className="item-detail-text">
              <h1>{product.name}</h1>
              <p>{product.description}</p>                    
              {quantityItemDetail ? 
              <div>
                <button onClick={navigateCart}>Go cart</button>
                <button onClick={navigateHome}>Go back</button>
              </div>
              :  
              <ItemCount onAdd={confirmPurchase} initial={1} stock={product.stock} />
               }
             </div>
          </div> 
        </div>
  );
};
      
export default ItemDetail;