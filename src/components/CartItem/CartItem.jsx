import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"

import './CartItem.css'

const CartItem = ({item, cantidad}) => {

  // Recibo de Context
  const { eliminarProducto } = useContext(CarritoContext);


  // Return  
  return (
    <div className="cartItem_container">
      <img className="cartItem_img" src={item.img} alt={item.nombre}/>
      <div className="ms-5">
        <h4> {item.nombre} </h4>
        <p className="cartItem_desc"> Cantidad: {cantidad} </p>
        <p className="cartItem_desc"> Precio: ${item.precio * cantidad}  (${item.precio} c/u) </p>
        <button onClick={() => eliminarProducto(item.id)} className="btn btn-outline-danger"> Eliminar </button>
      </div>
    </div>
  )
}

export default CartItem