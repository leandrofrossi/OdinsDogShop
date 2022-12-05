import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import ItemCount from "../ItemCount";
import './styles.css';

const ItemDetail = ({ product }) => {  
  const {addProduct} = useContext(Shop);

  const [quantityItemDetail, setQuantityItemDetail] = useState(0);

  const navigate = useNavigate();

  const confirmPurchase = (stock) => {     
    addProduct({...product, stock})   
    setQuantityItemDetail(stock);
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
            <img className="detail-image" src={product.image} alt="detail" />
            <div className="item-detail-text">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>${product.precio}</p>                      
              {quantityItemDetail ? 
              <div>
                <button className="boton" onClick={navigateCart}>Ir al Carrito</button>
                <button className="boton" onClick={navigateHome}>Voler a Inicio</button>
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