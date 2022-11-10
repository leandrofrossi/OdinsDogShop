import React, {useEffect, useState} from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import rawProducts from '../../data/products';

export default function ItemListContainer () {

  const [products, setProducts] = useState([])

  const {categoryId} = useParams()
    
  useEffect(()=> {
    ( async ()=> {
      const obtenerProductos = ()=>{
        return new Promise ((resolve, reject)=>{
          setTimeout(()=>{
            resolve(rawProducts)
          },2000)
        })
      };
        try{          
            const response = await obtenerProductos();
            setProducts(response)  
        } catch(error){
          <h2>ERROR</h2>
        }
    })()
  }, [categoryId])

  return (
    <>
      {products.length ? <ItemList products={products}/> : <h2>Loading...</h2>}
    </>
  )
}