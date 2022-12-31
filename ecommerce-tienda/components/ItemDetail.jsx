import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    const [itemCount, setItemCount] = useState(0);
    const acceder = useContext(CartContext);

    const onAdd = (qty) =>{
        setItemCount(qty);

        acceder.addToCart(item, qty);
        
    }
    return (

        <>
        <div className="ventanaDetalles">
        <h1 className="tituloDetalles">{item.nombre}</h1>
        <img src={item.imagen} alt="" className="imagenDetalles" />
        <h3 className="textoDetalles">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, saepe. In pariatur eveniet qui voluptas optio, numquam itaque quisquam molestias esse unde voluptatem, exercitationem officia vero earum, dignissimos dicta iure.</h3>

        <h3 className="precioDetalle">{item.precio}$</h3>
        <h2 className="stock">Unidades en stock {item.stock}</h2>
        </div>

        
        {
            itemCount === 0
            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            : <Link to='/Cart'><button className="boton">Ver Carrito</button></Link>
        }
       </> 
    
    )
}

export default ItemDetail;