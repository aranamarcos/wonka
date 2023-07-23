import { useContext } from "react"
import { Link } from "react-router-dom"

import { CarritoContext } from "../../context/carritoContext"
import CartItem from "../CartItem/CartItem"

import './Cart.css'


const Cart = () => {

    // Recibo de Context
    const { carrito, precioTotal, cantidadTotal, vaciarCarrito} = useContext(CarritoContext);


    // Retorno temprano
    if(cantidadTotal === 0){
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }
    

    // Return
    return (
        <div>
            <h3 className="cart_titulo">Carrito</h3>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)}
            <hr />
            <div className="ms-5">
                <p>Productos: {cantidadTotal}</p>
                <p>Precio Total: $ {precioTotal}</p>
            </div>
            <hr />
            <button onClick={() => vaciarCarrito()} className="btn btn-outline-danger ms-5"> Vaciar Carrito </button>
            <Link to="/checkout" className="btn btn-success ms-5"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart