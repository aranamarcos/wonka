import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="detailContainer">
        <img src={img} alt={nombre}/>
        <h4>{nombre}</h4>
        <p>Descubre la alegría en cada mordisco con la combinación ideal de sabores y texturas en los chocolates y golosinas Wonka, una experiencia que te llevará a la felicidad absoluta.</p>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
    </div>
  )
}

export default ItemDetail