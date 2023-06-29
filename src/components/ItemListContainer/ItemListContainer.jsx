import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { getAllProductos, getCategoryProductos } from "../../asyncmock"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getCategoryProductos : getAllProductos;

    funcionProductos(idCategoria)
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
  }, [idCategoria])

  return (
    <div>
      <h2>{idCategoria || "productos"}</h2>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer