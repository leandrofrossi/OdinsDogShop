import React, { useState } from "react";
import ItemCount from "../ItemCount";
import './styles.css';

const ItemDetail = ({ product }) => {  
  const [quantityItemDetail, setQuantityItemDetail] = useState(0);

  const confirmPurchase = (quantity) => {        
    setQuantityItemDetail(quantity);
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
                <button>Go cart</button>
                <button>Go back</button>
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