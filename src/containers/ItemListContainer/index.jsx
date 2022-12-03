import React from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import './styles.css';
import useFirebase from "../../hooks/useFirebase";


const ItemListContainer = () => {
  
  const { categoryId } = useParams();

  const [data, error, loading] = useFirebase(categoryId)



return (
    <>
      {(data.length && !loading &&!error)
      ? <ItemList products={data} />
      : error
      ? <h1>{error}</h1>
      : loading
          ? <h2>Loading...</h2>
          : null
      }
    </>
);
};

export default ItemListContainer;