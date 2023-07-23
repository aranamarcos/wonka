import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../services/config'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import './ItemListContainer.css'


const ItemListContainer = () => {

  // Recibo por parametro URL
  const {idCategoria} = useParams();


  // Estados
  const [productos, setProductos] = useState([]);


  // UseEffect
  useEffect(() => {

    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then( res => {
        setProductos(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      })

  }, [idCategoria])


  // Return
  return (
    <div>
      <h3 className="tituloCategoria">{idCategoria || "todos los productos"}</h3>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer