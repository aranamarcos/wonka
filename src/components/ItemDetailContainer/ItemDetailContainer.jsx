import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/config'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  
    // Recibo por parametro URL
    const {idItem} = useParams();


  // Estados
  const [producto, setProducto] = useState(null);


  // useEffect
  useEffect(() => {

    const nuevoDoc = doc(db, "productos", idItem);
    
    getDoc(nuevoDoc)
      .then( res => {
        setProducto({id: res.id, ...res.data()})
      })

  }, [idItem]);


  // Return  
  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer