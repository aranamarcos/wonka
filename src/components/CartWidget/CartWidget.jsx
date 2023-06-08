import "./CartWidget.css"

const CartWidget = () => {
        const cart = "../public/img/cart-icon.svg";
    return (
        <div className="cart-button">
            <img className="cart-icon" src={cart} alt="icono de carrito"/>
            <div className="cart-number">
                <strong>10</strong>
            </div>
        </div>
  )
}

export default CartWidget