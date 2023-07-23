import { useContext } from "react";
import { Link } from "react-router-dom";

import { CarritoContext } from "../../context/carritoContext";

import "./CartWidget.css"


const CartWidget = () => {

    const cart = "../public/img/cart-icon.svg";

    
    // Recibo de Context
    const { cantidadTotal } = useContext(CarritoContext);
    

    // Return    
    return (
        <div>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
                <div className="cart-button">
                    <img className="cart-icon" src={cart} alt="icono de carrito"/>
                    {
                        cantidadTotal > 0 && <p className="widgetTotal"> {cantidadTotal} </p>   
                    }
                </div>
            </Link>
        </div>
  )
}

export default CartWidget