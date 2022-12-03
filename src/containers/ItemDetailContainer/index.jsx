import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import './styles.css';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
      const getProductDetail = async () => {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setProduct({...docSnap.data(), id: docSnap.id});
        } else {
          console.log("No such document!");
        }
      }
      getProductDetail();  
    }, [id]); 

    return (product ? <ItemDetail product={product}/> : <h2>Loading...</h2> );
    
  };

export default ItemDetailContainer;
