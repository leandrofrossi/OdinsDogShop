import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { getProductById } from '../../data/products';
import './styles.css';

const ItemDetailContainer = () => {

    const {Id} = useParams();

    const [product, setProduct] = useState(null);

   useEffect(() => {
    try{
      getProductById(Id).then(response => {
        setProduct(response)
      })
    } catch (error){
      console.log(error)
    }
    }, [Id]);

    return (product ? <ItemDetail product={product}/> : <h2>Loading...</h2> );
    
  };

export default ItemDetailContainer; 
