import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    precioTotal: 0,
    cantidadTotal: 0
})

export const CarritoProvider = ({children}) => {

    // Estados
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);


    // Funcion: Agregar producto
    const agregarProducto = (item, cantidad) => {

        setPrecioTotal(prev => prev + (item.precio * cantidad));
        setCantidadTotal(prev => prev + cantidad);

        const productoExistente = carrito.find(prod => prod.item.id === item.id);
        
        if(!productoExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);
        } else {
            const carritoActualizado = carrito.map(prod => {
                (prod.item.id === item.id) ? {...prod, cantidad: prod.cantidad + cantidad} : prod;
            });
            setCarrito(carritoActualizado);
        }
    }


    // Funcion: Eliminar producto    
    const eliminarProducto = (id) => {

        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setPrecioTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
        setCantidadTotal(prev => prev - productoEliminado.cantidad);        
    }


    // Funcion: Vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([]);
        setPrecioTotal(0);
        setCantidadTotal(0); 
    }


    // Return
    return (
        <CarritoContext.Provider value={{carrito, precioTotal, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}