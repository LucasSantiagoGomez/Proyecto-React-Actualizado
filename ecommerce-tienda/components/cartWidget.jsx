import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "./CartContext";
const cartWidget = ()=>{
    useContext(CartContext)
    return(
        <>
        <BsCart2/>
        </>

    )
}

export default cartWidget;