import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import rawProducts from '../../data/products';

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {
      ( async ()=> {
            const obtenerProductos = ()=>{
              return new Promise ((resolve, reject)=>{
                  setTimeout(()=>{
                    resolve(rawProducts)
                  },2000)
              })
            };
              const response = await obtenerProductos();
              setProduct(response)  
      })()
    }, [id])
    
    return (product ? <ItemDetail product={product}/> : <h2>Loading...</h2> )
    
  }

export default ItemDetailContainer;