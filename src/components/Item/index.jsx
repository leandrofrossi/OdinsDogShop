import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {    
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div onClick={navigateDetail} className="card-detail">
      <img src={product.image} alt="producto" className="card-image"/>
      <p key={product.id} className="card-text">{product.name}. <br></br> Precio: ${product.precio}.</p>
    </div>
  )
}

export default Item