import React, { useContext } from "react";
import CartItem from "../../components/CartItem";
import { Shop } from "../../contexts/Shop";
import { useNavigate } from "react-router-dom";
import './styles.css';


const CartContainer = () => {
    const { products, calculateTotal, emptyCart } = useContext(Shop);
    
    const navigate = useNavigate();
    
    const navigateForm = () => {
        navigate('/form')
      };
    const navigateHome = () => {
        navigate('/')
      };
    const vaciarCarrito = () =>{
        emptyCart()
    };
   

    return (products.length>0 ?
        <div className="containerCart">
            {products.map((product) => {
                return <CartItem key={product.id} item={product} />
            })}
            <p>El total de la compra es $ {calculateTotal()}</p>
            <div>
                <button className="botonCompra" onClick={navigateForm}>Confirmar compra</button>
                <button className="botonCompra" onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
        :
        <div className="containerCart">
            <h2 className="texto">NO HAY PRODUCTOS EN EL CARRITO</h2>
            <button className="botonCompra" onClick={navigateHome}>Voler a Inicio</button>
        </div>
    );
};

export default CartContainer;