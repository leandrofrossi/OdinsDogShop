import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { getProductById } from '../../data/products';
import './styles.css';

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [product, setProduct] = useState(null);
    useEffect(() => {
    try{
      getProductById(id).then(response => {
        setProduct(response)
      })
    } catch (error){
      console.log(error)
    }
    }, [id]); 

    return (product ? <ItemDetail product={product}/> : <h2>Loading...</h2> );
    
  };

export default ItemDetailContainer;
