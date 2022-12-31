import ItemlDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import CustomNavbar from "../components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "../components/Cart";
import CartcontextProvider from "../components/CartContext";




const App = () => {
  return( 
    <CartcontextProvider>
    <BrowserRouter>
    <CustomNavbar/>
    <Routes>
      <Route  path="/" element={<ItemListContainer/>}/>
      <Route  path="/category/:categoryid" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemlDetailContainer/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    
    </BrowserRouter>
    </CartcontextProvider>
  )
}

export default App;