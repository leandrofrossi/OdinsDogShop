import { createContext, useState } from "react";
import React from "react";

export const Shop = createContext({});

const ShopProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) => {        
        const flagRepeated = isProductRepeated(productToAdd.id);
        if (flagRepeated) {            
            const productoRepetidoModificado = products.find(
                (productInCart) => productInCart.id === productToAdd.id
            );
            productoRepetidoModificado.stock += productToAdd.stock;            
            const productosCartSinRepetido = products.filter(
                (productsInCart) => productsInCart.id !== productToAdd.id
            );
            setProducts([
                ...productosCartSinRepetido,
                productoRepetidoModificado,
            ]);
        } else {
            setProducts([...products, productToAdd]);
        }
    };
    
    const isProductRepeated = (id) => {
        return products.some((product) => product.id === id);
    };
    
    const removeProduct = (id) => {
        const productosCart = products.filter(
            (productsInCart) => productsInCart.id !== id
        );
        setProducts(productosCart);
    };
  
    const emptyCart = () => {
        setProducts([]);
    };

    const calculateTotal = () => {
        const total = products.reduce(
            (acc, producto) =>
                (acc += producto.stock * producto.precio),
            0
        );
        return total;
    };

    const totalItemsCart = () => {
        let total = 0;
        products.forEach((product) => (total += product.stock));
        return total;
    };

    return (
        <Shop.Provider
            value={{
                products,
                addProduct,
                removeProduct,
                emptyCart,
                calculateTotal,
                totalItemsCart,
            }}
        >
            {children}
        </Shop.Provider>
    );
};

export default ShopProvider;