const baseProductos = [
    {id:"01", idCateg:"tabletas", nombre:"Chocolate Bar Delight", precio:10, img: "../img/products/tabletas/bar-brown-1.jpg"},
    {id:"02", idCateg:"tabletas", nombre:"Chocolate Bar Crackers", precio:12, img: "../img/products/tabletas/bar-crackers-1.jpg"},
    {id:"03", idCateg:"tabletas", nombre:"Chocolate Bar M&M", precio:13, img: "../img/products/tabletas/bar-mym-1.jpg"},
    {id:"04", idCateg:"tabletas", nombre:"Chocolate Bar Oreo", precio:12, img: "../img/products/tabletas/bar-oreo-1.jpg"},
    {id:"05", idCateg:"tabletas", nombre:"Chocolate Bar Original", precio:9, img: "../img/products/tabletas/bar-original-1.jpg"},
    {id:"06", idCateg:"nerds", nombre:"Nerds Candy Corn", precio:4, img: "../img/products/nerds/nerds-candy-1.jpg"},
    {id:"07", idCateg:"nerds", nombre:"Nerds Frosty", precio:5, img: "../img/products/nerds/nerds-frosty-1.jpg"},
    {id:"08", idCateg:"nerds", nombre:"Nerds Gummy", precio:3, img: "../img/products/nerds/nerds-gummy-1.jpg"},
    {id:"09", idCateg:"nerds", nombre:"Nerds Rainbow", precio:4, img: "../img/products/nerds/nerds-rainbow-1.jpg"},
    {id:"10", idCateg:"nerds", nombre:"Nerds Strawberry", precio:5, img: "../img/products/nerds/nerds-strawberry-1.jpg"},
    {id:"11", idCateg:"otros", nombre:"Fun Dip", precio:7, img: "../img/products/otros/otros-fundip-1.jpg"},
    {id:"12", idCateg:"otros", nombre:"Fun Dip Funbook", precio:15, img: "../img/products/otros/otros-fundipFunbook-1.jpg"},
    {id:"13", idCateg:"otros", nombre:"Gobstopper", precio:6, img: "../img/products/otros/otros-gobstopper-1.jpg"},
    {id:"14", idCateg:"otros", nombre:"Runts", precio:8, img: "../img/products/otros/otros-runts-1.jpg"},
    {id:"15", idCateg:"otros", nombre:"Sweetarts Merry Mix", precio:9, img: "../img/products/otros/otros-sweetartsMerry-1.jpg"},
    {id:"16", idCateg:"otros", nombre:"Sweetarts Ropes", precio:8, img: "../img/products/otros/otros-sweetartsRopes-1.jpg"},
]

// Envia todos los productos
export const getAllProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(baseProductos);
        }, 400);
    });
};

// Envia un producto
export const getOneProductos = (id) => {
    return new Promise((res) => {
        setTimeout(() => {
            const oneProductos = baseProductos.find(prod => prod.id === id);
            res(oneProductos);
        }, 400);
    });
};

// Envia una categoria de productos
export const getCategoryProductos = (idCateg) => {
    return new Promise((res) => {
        setTimeout(() => {
            const categoryProductos = baseProductos.filter(prod => prod.idCateg === idCateg);
            res(categoryProductos);
        }, 400);
    });
};