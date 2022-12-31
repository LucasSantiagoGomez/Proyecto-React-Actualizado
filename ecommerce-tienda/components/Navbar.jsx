import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';


const CustomNavbar = ()=>{
    return(
        <header>
              <Navbar bg="dark" variant="dark">
        <Container className='menuNavHeader'>
          <Navbar.Brand><Link to="/" className='Logo'>The Music Hole</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/category/Guitarras" className='navLinks'>Guitarras</Link></Nav.Link>
            <Nav.Link><Link to="/category/Bajos" className='navLinks'>Bajos</Link></Nav.Link>
            <Nav.Link><Link to="/category/Pianos" className='navLinks'>Pianos</Link></Nav.Link>
            
           
          </Nav>
         
        </Container>
      </Navbar>

      <BsCart2/>

      
      

      
    
   
        </header>
        

    )
};

export default CustomNavbar;