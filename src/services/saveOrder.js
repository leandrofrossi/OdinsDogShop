import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import generateOrderObject from "./generateOrderObject";

export const saveOrder = async (nombreComprador, telefono, email, products, total) => {
    try {
        const generatedOrder = generateOrderObject(
            nombreComprador,
            email,
            telefono,
            products,
            total
        );
    
        const productOutOfStock = [];
        const productsInFirebase = [];
       
        for (const productInCart of products) {
            const docRef = doc(db, "products", productInCart.id);
            const docSnap = await getDoc(docRef);
            const productInFirebase = { ...docSnap.data(), id: docSnap.id };
            productsInFirebase.push(productInFirebase);
            if (productInCart.stock > productInFirebase.stock)
                productOutOfStock.push(productInCart);
        }
    
            
        if (productOutOfStock.length === 0) {
           
            for (const productInCart of products) {
                const productInFirebase = productsInFirebase.find(
                    (product) => product.id === productInCart.id
                );
                const productRef = doc(
                    db,
                    "products",
                    productInCart.id
                );
                
                await updateDoc(productRef, {
                    stock:
                        productInFirebase.stock -
                        productInCart.stock,
                });
            }
               
            const docRef = await addDoc(
                collection(db, "orders"),
                generatedOrder
            );
            alert(
                `Se generó la compra correctamente con ID: ${docRef.id}. Recibirá un email con el detalle y un Whatsapp para coordinar el pago y la entrega. Gracias!`
            );
            
        } else {
            let mensaje = "";
            for (const product of productOutOfStock) {
                const productInFirebase = productsInFirebase.find(
                    (productFirebase) => productFirebase.id === product.id
                );                
                mensaje += `${product.name}, stock disponible: ${productInFirebase.stock}, cantidad pedida: ${product.stock}\n`;
            }
            alert(`Hay producto/s fuera de stock: \n${mensaje}`);
        }
    } catch (error) {
        alert(error.message);
    }
}