const products = [
    { id: 1, description: "Mordillo Kong de goma ultraduradero. Recomendado para perros de entre 7 y 16 kgs.", name: "Mordillo Kong Extreme Medium", stock: 10, precio: 6000, image:require("./images/mordillo.webp"), category:"juguetes"},
    { id: 2, description: "Pelota Maciza de goma de 7 cms de diámetro. Recomendado para perros medianos/grandes.", name: "Pelota Maciza", stock: 12, precio: 1500, image: require("./images/pelota.webp"), category:"juguetes"},
    { id: 3, description: "Correa de nylon M. 1 metro de largo x 20 mm. The Mandalorian.", name: "Correa StarWars", stock: 18, precio: 1900, image:require("./images/correa.webp"), category:"paseo"},
    { id: 4, description: "Pretal de nylon talle S-M, 40-65 cms. Grosor de 20mm. Darth Vader.", name: "Pretal StarWars", stock: 15, precio: 2500, image:require("./images/pretal.webp"), category:"paseo"},
    { id: 5, description: "Collar de nylon talle S-M, 30-45 cms. Chewbacca.", name: "Collar StarWars", stock: 20, precio: 1100, image:require("./images/collar.webp"), category:"paseo"}
];

//export default products;

export const getProducts = ()=>{
    return new Promise ((resolve, reject)=>{
      setTimeout(()=>{
        resolve(products)
      },2000)
    })
};

export const getProductsByCategory = (categoryId)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
};