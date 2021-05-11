import React from 'react';
import {Card,Col,CardImg,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto';


//componente version con clases
class Producto extends React.Component{
    //todo componente reacttiene un medodo render
    //se encarga de renderizar en el navegador el html correspondiente 
    //al componente, transforma el jsx a html, se crea automaticamente al crear 
    //componente y estado del componente se actualiza
    render(){
        return(
            <Col sm='4'>
                
                {/* <componenteAppLaravelWithAxios/> */}
                <Card className='Card' body outline color="primary">
                    {/* src se se convierte en una prop que para hacia el componente CardImg */}
                    <CardImg src={this.props.imagen}/>
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Valor: </b> {this.props.precio}$</CardSubtitle>
                        <CardText>{this.props.descripcion}</CardText>
                   
                        <FichaProducto props={this.props}/>
                        {/* <Button className="Button">Comprar</Button>                                 */}
                        {/* <Button className="Button">Ver ficha</Button> */}
                    </CardBody>
                </Card>
            </Col>        
        );
    }
}


// componente version con funciones 
// function Producto (){
//     return(
//         <Col sm='4'>
//             <Card className='Card'>
//                 {/* src se se convierte en una prop que para hacia el componente CardImg */}
//                 <CardImg src='https://resources.claroshop.com/medios-plazavip/mkt/5aaad569abf0c_ipod-touch-blue_2jpg.jpg'/>
//                 <CardBody>
//                     <CardTitle>SmastPhone color blue</CardTitle>
//                     <CardSubtitle><b>Valor: </b> 2600$</CardSubtitle>
//                     <CardText>Ipod en color azul, con pantalla OLED, y una sola camara con inteligencia arficial, ideal para tus selfis</CardText>
//                     <Button className="Button">Comprar</Button>
//                     <Button className="Button">Ver ficha</Button>
//                 </CardBody>
//             </Card>
//         </Col>
        
//     );
// }

export default Producto;