import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CarritoContext } from '../../context/carritoContext';
import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css'


const ItemDetail = ({id, nombre, precio, img, img2, stock}) => {

  // Recibo de Context
  const {agregarProducto} = useContext(CarritoContext);


  // Estados
  const [agregarCantidad, setAgregarCantidad] = useState(0);


  // Funcion: Manejador de cantidad  
  const manejadorCantidad = (cantidad) => {
    
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio, img, img2};
    agregarProducto(item, cantidad);
  }


  // Return  
  return (
    <div className="detailContainer">
      <div className="detailTextContainer">
        <h2>{nombre}</h2>
        <p>Descubre la alegría en cada mordisco con la combinación ideal de sabores y texturas en los chocolates y golosinas Wonka, una experiencia que te llevará a la felicidad absoluta.</p>
        <p className="itemDetail_precio">Precio: $ {precio}</p>
        <p>Stock: {stock}</p>
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} fnAgregar={manejadorCantidad}/>)
        }
      </div>
      <img src={img2} alt={nombre}/>
    </div>
  )
}

export default ItemDetail