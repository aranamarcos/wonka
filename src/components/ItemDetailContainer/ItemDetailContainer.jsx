import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { getOneProductos } from "../../asyncmock"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        getOneProductos(idItem)
            .then(resp => setProducto(resp))
            .catch(err => console.log(err))
    }, [idItem]);

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer