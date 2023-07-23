import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, nombre, precio, stock, img}) => {

  // Return
  return (
    <div className="itemContainer">
      <Link className="itemLink" to={`/item/${id}`}>
        <img src={img} alt={nombre}/>
        <h4 className="itemTitle">{nombre}</h4>
        <p className="itemTitle">$ {precio}</p>
        <p className="itemStock">Stock: {stock}</p>
      </Link>
    </div>
  )
}

export default Item