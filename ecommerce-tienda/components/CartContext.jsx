import { useState } from "react";
import { createContext } from "react";



export const CartContext = createContext();

const CartcontextProvider = ({children}) => {
    const [cartList, setCartlist] = useState([])

    const addToCart = (item, qty) =>{
        let buscarproducto = cartList.find(producto => producto.idItem === item.id);
        if (buscarproducto === undefined){
        setCartlist([
            ...cartList,
            {
              idItem: item.id,
              nombre: item.nombre,
              imagen:item.imagen,
              precio:item.precio,
              qtyItem: qty

            }
            
        ])
    }else{
        buscarproducto.qtyItem += qty;
        setCartlist([
            ...cartList
        ]);
    }
    }
    const borrarTodo = () =>{
        setCartlist([]);
    }
    const delThis = (id) =>{
        const eliminarProducto = cartList.filter(item => item.id !== id);
        setCartlist(eliminarProducto);
               
    }
    const totalPorItem = (idItem) =>{
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].precio * cartList[index].qtyItem;
    }

    const subTotal= () =>{
        let totalItem = cartList.map(item=> totalPorItem(item.idItem));
        return totalItem.reduce((valorAnterior, valorActual )=> valorAnterior + valorActual);
    }
    const CalculoTotal = ()=>{
        return subTotal();
    }

    const calculoQty = ()=>{
        let cantidad = cartList.map(item => item.qtyItem);
        return cantidad.reduce(((valorAnterior, valorActual)=> valorAnterior + valorActual),0);
    }

    return(
        <CartContext.Provider 
        value={{
            cartList,
            addToCart,
            delThis,
            borrarTodo,
            totalPorItem,
            subTotal,
            CalculoTotal,
            calculoQty,
            }}>
           {children}
        </CartContext.Provider>

    )
}

export default CartcontextProvider;