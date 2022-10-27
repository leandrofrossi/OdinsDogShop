import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {
    return (  
        <div className="header">
            <h1 className="titulo">Odin's Dog Shop</h1>
            <ul className="menu">
                <li className="menu-item"><a href="#inicio" className="link">Inicio</a></li>            
                <li className="menu-item"><a href="#contacto" className="link">Contacto</a></li>
                <li className="menu-item"><a href="#nosotros" className="link">Nosotros</a></li>
            </ul>        
            <CartWidget/>
        </div>      
    );
};
    
export default NavBar;