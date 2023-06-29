import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="itemContainer">
      <Link className="itemLink" to={`/item/${id}`}>
        <img src={img} alt={nombre}/>
        <h4>{nombre}</h4>
        <p>Precio: {precio}</p>
      </Link>
    </div>
  )
}

export default Item