
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = (props)=>{
    return(
        <>
           

            <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagen} className="imagenCarta" />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
          Disponibles:{props.stock}
        </Card.Text>
        <Card.Text>
        {props.precio}$
        </Card.Text>
        
        <Button variant="dark"> <Link to={`/item/${props.id}`} className="botonDetalles" >Detalles</Link></Button>
      </Card.Body>
    </Card>
    
        </>
            
        
    )
}

export default Item;