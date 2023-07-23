import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({inicial, stock, fnAgregar}) => {

  // Estados
  const [contador, setContador] = useState(inicial);


  // Funciones Incrementar y Decrementar

  const incrementar = () => {
    if(contador < stock) {
      setContador(contador + 1);
    }
  }

  const decrementar = () => {
    if(contador > inicial) {
      setContador(contador - 1);
    }
  }


  // Return
  return (
    <>
      <div className="itemCount_container">
        <div className="itemCount_objects">
          <button onClick={decrementar} className="btn btn-primary itemCount_btnMod"> - </button>
          <p className="itemCount_contador"> {contador} </p>
          <button onClick={incrementar} className="btn btn-primary itemCount_btnMod"> + </button>
        </div>
      </div>
      <button onClick={() => fnAgregar(contador)} className="btn btn-success mt-4"> Agregar al carrito </button>
    </>
  )
}

export default ItemCount