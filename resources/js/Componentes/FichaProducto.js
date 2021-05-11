import React from 'react';
import {Button,CardImg,Container,Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';
import './FichaProducto.css'
import {listaCarrito} from '../listaCarrito.json';
//import { listaCarrito } from '../export.js' 

//V1 de solucion para actulizar stock
// import {listaProductos} from '../listaProductos.json';

class FichaProducto extends React.Component{

    constructor(props){
        super();

        this.state = {
            modal:false,
            listaCarrito,
            stock : props.props.stock,
            
            //V1 de solucion para actulizar stock  
            //use una variable mas para guardar un nombre temporalmente 
            //cuando se le da clic en el boton, al ver ficha
            // nombreTmp:""
        };

        
        //interconectamos la informacion para poder utilizar las props 
        //del argumento en el metodo toggle

        //bind hara que el o los argumentos recibidos por la clase  FichaProducto
        //puedan ser compartidos a los demas metodos de la clase
        this.toggle =this.toggle.bind(this);
        //al igual como hicmos en el metodo toggle,debemos añadir 
        //la siguiente liena para poder utilizar las props que recibe 
        //el constructor y compartirlas en 
        //nuestro metodo agregarCarrito
        this.agregarCarrito = this.agregarCarrito.bind(this);
        //console.log(props);
        //para filtrar solo la informacion del producto
        console.log(props.props);
    }

    //acionador de boton
    toggle(){
       //mostrar la informacion que llega a la clase
       //console.log(this.props);

       this.setState(prevState =>({
           modal: !prevState.modal
       }));

       
    }
    
    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });

        this.setState(prevState =>({
            modal: !prevState.modal,
            //V2 version mejorada paa modificar el stock
            //stock:this.state.stock-1
            //manera 2
            //stock:prevState.stock-1
        }));

        //V1 de solucion para actulizar stock
        // // mapeo de listaProductos y recorrido productos
        // // verificacion por nombre, para identficar que producto fue 
        // // seleccionado para modificar su estado del stock
        // console.log(this.state.nombreTmp);
        // listaProductos.map( (producto,i) => {
        //     //console.log(producto.stock);
        //     //console.log(i);
        //     //identificacion del producto por su nombre
        //     //si coinside con el titulo del producto seleccionado en con el estado temporal guardado 
        //     //nombreTmp, se hace la operacion de restar a la cantitadad en el stock
        //     if(this.state.nombreTmp === producto.titulo){
        //         //forma 1 con warning
        //         //return this.state.stock = this.state.stock-1;
                
        //         //forma 2 sin warning
        //         //aplicacmos la opracion de resta al stoke
        //         //ahora solo limpiaamos el estado temporal nombreTmp que usamos
        //         //para guardar el nombre del producto para evitar, se use nuevamente  
        //         //sin haber sido seleccionado y 
        //         return this.setState({stock : this.state.stock-1, nombreTmp : " "}); 
        //     }
        // })
       
        //terecer punto determinar cuando carrito llegue a cero ya no poder agregar al carrito 
        if(this.state.stock !== 0){
            this.setState(prevState =>({
                stock:prevState.stock-1
            }));
        }else{
            alert("stock agotado...");
        }

        //quinto punto actulizacion del numero del boton carrito automaticamente 
        const badge = document.getElementById("Badge1");
        badge.innerText = listaCarrito.length;
    }

    render(){

        return(
            //con el uso de .this nos permite hacer referencia y accesar a las propiedades y metodos del componente 
            <Container>
                    <Button onClick={this.toggle}> Ver ficha</Button>
                    {/* isOpen  devuelve un valor booleano que indica si se 
                    muestra la ventana emergente actual*/}
                    <Modal isOpen={this.state.modal}>
                        {/* expresion que nos permite guardar temporalmente en estado  
                        nombreTmp, el nombre del producto que se selecciono
                        , al tenerlo guardado ahora sabemos cual fue seleccionado
                        y se queda en espera a que sea agregado al carrito o solo se salga
                        nuevamente a la vista general de los productos*/}
                        
                        {/* v1 con warning */}
                        {/* V1 de solucion para actulizar stock */}
                        {/* {this.state.nombreTmp = this.props.props.titulo} */}
                        
                    
                        <ModalHeader>{this.props.props.titulo}</ModalHeader>
                        <ModalBody>
                            <CardImg src={this.props.imagen}/>
                            <p>El detalle del producto seleccionado es el siguiente:</p>
                            {this.props.props.descripcion}
                            <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> pesos.</p>
                            <p>Hay <b>{this.state.stock}</b> unidades de este producto disponibles.</p>
                        </ModalBody>
                        <ModalFooter className="modalFooter">
                            <Button color="primary" onClick={this.agregarCarrito} >Agregar al Carrito</Button>
                            <Button color="secondary" onClick={this.toggle} >Volver Atras</Button>
                        </ModalFooter>
                        {/* React en jovenesProgamadores */}
                    </Modal>
            </Container>
            
        );
    }

}

export default FichaProducto;