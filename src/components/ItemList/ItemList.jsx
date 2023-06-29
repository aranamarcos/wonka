import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className="d-flex flex-wrap">
        {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList