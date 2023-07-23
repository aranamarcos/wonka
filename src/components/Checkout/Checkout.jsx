import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/config'
import { useState, useContext } from "react"

import { CarritoContext } from "../../context/carritoContext"

import './Checkout.css'

const Checkout = () => {

    // Recibo de Context
    const { carrito, cantidadTotal, precioTotal, vaciarCarrito } = useContext(CarritoContext);


    // Estados
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");

    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");


    // Funcion: Manejador de formulario
    const manejadorFormulario = (e) => {
        e.preventDefault();

        // Validaciones del formulario
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor complete todos los campos");
            return;
        }
        if(email !== emailConfirmacion){
            setError("Los email no coinciden, por favor revise los datos");
            return;
        }

        // Creacion y carga de la orden de compra
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            cantidadTotal: cantidadTotal,
            precioTotal: precioTotal,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date() 
        };

        Promise.all(
            orden.items.map(async(productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                });
            })
        )
        .then(() => {
            addDoc(collection(db, "ordenes"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id);
                    vaciarCarrito();
                })
                .catch( () => {
                    setError("Error al crear la orden, vuelva a intentar.");
                })
        })
        .catch( () => {
            setError("Error al actualizar el stock, vuelva a intentar.");
        })
    }
    

    // Return
    return (
        <div>
            <h3 className="checkout_title">Checkout</h3>
            <div className="d-flex justify-content-center">
                <form onSubmit={manejadorFormulario} className="w-75">

                    {/* Lista de productos comprados */}
                    {carrito.map(prod => (
                        <div key={prod.item.id}>
                            <strong>{prod.item.nombre}</strong>
                            <p>({prod.cantidad} uni - ${prod.item.precio} c/u): $ {prod.item.precio * prod.cantidad}</p>
                        </div>
                    ))}
                    <hr />
                    <p className="checkout_total">Total: ${precioTotal} ({cantidadTotal} uni)</p>
                    <hr />

                    {/* Campos para completar formulario */}
                    <div>
                        <label htmlFor="nombre" className="form-label"> Nombre </label>
                        <input type="text" className="form-control mb-3" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="apellido" className="form-label"> Apellido </label>
                        <input type="text" className="form-control mb-3" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="telefono" className="form-label"> Telefono </label>
                        <input type="text" className="form-control mb-3" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="email" className="form-label"> Email </label>
                        <input type="email" className="form-control mb-3" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="emailConfirmacion" className="form-label"> Email Confirmación </label>
                        <input type="email" className="form-control mb-3" value={emailConfirmacion} onChange={(e)=>setEmailConfirmacion(e.target.value)} />
                    </div>

                    {/* Mensaje de error y boton submit */}
                    {
                        error && <p style={{color: "red"}}> {error} </p>
                    }
                    <div className="w-100 d-flex justify-content-center">
                        {
                        ordenId ? (<strong>¡Gracias por tu compra! Tu numero de orden es {ordenId}</strong>) : <button type="submit" className="btn btn-success mt-5"> Finalizar Compra </button>
                        } 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout