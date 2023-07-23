import Item from "../Item/Item"

const ItemList = ({productos}) => {

  // Return
  return (
    <div className="d-flex flex-wrap">
        {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList