import React from 'react';
import {Badge,Button,Popover,PopoverHeader,PopoverBody,Table} from 'reactstrap'; 
import {listaCarrito} from '../listaCarrito';
//import { listaProductos } from '../export.js' 
class Carro extends React.Component{
    
    constructor(){
        super();

        this.state={
            popoverOpen:false,
            listaCarrito,

            //vercion 1 para sumar precios de todos los productos seleccionados
            //sea agrego estado de total a pagar para 
            //almacenar el total pagar
            //totalAPagar:0
        };

        this.toggle=this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState =>({
            popoverOpen: !prevState.popoverOpen
        }));

    }
    
    //V2 mejorando la suma de los precios de los productos
    SumarTotalAPagar(){
        let TotalAPagar = 0;
        this.state.listaCarrito.map((producto) => {
                //en caso de que los tipos de datos sean de tipo string 
                //y deseamos convertir de string a entero 
                //o flotante podemos usar parseInt() y parseFloat()
                //y .toString() para numero a cadena
                return TotalAPagar += parseFloat(producto.precio);
            } 
        ); 
        //console.log(TotalAPagar);
        return TotalAPagar;
    }

    render(){
        // se mantiene el estado totalAPagar en 0 cada que se inicia 
        // el muestro de los productos y suma de los precios y 
        // asi cuando se vuelva a dar clic en el boton de carrito 
        // no se sumen las anteriores precios mostrados 
        // y se este recetenado con los nuevos seleccionados 
        
        // vercion 1 para sumar precios de todos los productos seleccionados
        // this.state.totalAPagar = 0;
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito , i)=>{
              //console.log(i);
              //console.log(listaCarrito.precio);
              //aqui esta la operacion de suma de los precios al total de totalAPagar 
              //que se muestra en la tabla 
              
              //vercion 1 con  wrning 
            //   this.state.totalAPagar = this.state.totalAPagar + listaCarrito.precio;
              
             
              return(
                  <tr key={i}>
                
                    <td>{(i += 1)}</td>
                    <td>{listaCarrito.titulo}</td>
                    <td>{listaCarrito.precio} $</td>
                    
                  </tr>
              );
            }
          );


        return(
            <div>
                <Button id="Popover1" color="info">
                    <span className="material-icons">shopping_cart</span>
                    {/* manera 1  donde hay que dar clic para ver actualizado el nuemro del carrito */}
                    {/* <Badge color="secondary">{arregloCarrito.length}</Badge> */}
                    {/* version sin dar clic en el boton carrito para ver cambiar el nuemro del carrito */}
                    <Badge color="secondary"  id="Badge1" >{listaCarrito.length}</Badge>
                </Button>
                        {/* placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle} */}
                <Popover target="Popover1" placement="bottom"  isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Lista de compras</PopoverHeader>
                        <PopoverBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>key</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>  
                                <tbody>
                                    
                                    {arregloCarrito}
                                    {/* manera estatica */}
                                    {/* <tr>
                                        <td>1</td>
                                        <td>Producto1</td>
                                        <td>Precio1</td>
                                    </tr> */}
                                </tbody>
                                <tfoot>
                                    {/* por ultimo se cero el fToot 
                                        donde ya solo se despliega el total a pagar
                                        que es el el estado totalAPagar
                                    */}
                                    <tr>
                                        <th>Total:</th>
                                        <th></th>
                                        {/* vercion 1 para sumar precios de todos los productos seleccionados */}
                                        {/* <th>{this.state.totalAPagar} $</th> */}

                                        {/* cuarto punto formateo de salida del precio */}
                                        {/* para formatear la salida de precio  usa Intl.NumberFormat("de-DE").format() */}
                                        <th>{ Intl.NumberFormat("de-DE").format(this.SumarTotalAPagar()) } $</th>
                                    </tr>
                                </tfoot>
                            </Table>
                        </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;