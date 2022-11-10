import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {
    return (  
        <div className="header">
            <h1 className="titulo"><Link to="/" className="link">Odin's Dog Shop</Link></h1>
            <ul className="menu">
                <li className="menu-item"><Link to="/" className="link">Inicio</Link></li>            
                <li className="menu-item"><Link to="/category/juguetes" className="link">Juguetes</Link></li>
                <li className="menu-item"><Link to="/category/paseo" className="link">Paseo</Link></li>
            </ul>        
            <CartWidget/>
        </div>      
    );
};
    
export default NavBar;