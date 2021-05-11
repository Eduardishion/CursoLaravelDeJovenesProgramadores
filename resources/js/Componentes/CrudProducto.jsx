import React, { Component } from 'react';
import {Button,Table,Collapse,CardBody, Card,UncontrolledCollapse} from 'reactstrap'; 
import axios from 'axios';                             //libreria axios para tratar peticiones al servidor
import {ToastContainer,toast} from 'react-toastify';   //toastify parapoder crear notificaciones en la aplicacion 
import 'react-toastify/dist/ReactToastify.css' 
import '../../css/componenteApp.css' 

class CrudProducto extends Component {

    //contructor de la componenteApp
    constructor(){
        //con el coonstructor nos permite inicializar el componente
        //contructor de la clase y del componente web
        //que nos permite heradar todos metodos,fucionalidades,clases, asi como manipular estado del componente  de react 
        super();
        
        //estado del componente web de react son las propiedates 
        this.state={
            //estado del componente
            //desde aqui podemos inicilizar valores de las propiedades del componente 
            //podemos inicializar los valores vacios al iniciar el componente
            cod_producto:'', 
            descripcion:'',
            stock:'',
            provedor:'',
            fecha_ingreso:'',
            productos:[]
        };

        this.AgregarYActulizarTarea = this.AgregarYActulizarTarea.bind(this);
        this.ManejarElCambio = this.ManejarElCambio.bind(this);
   
    }

    

    //para actulizar el estado del componente desde inicio
    componentDidMount(){
        this.Obtenertareas();
    }

    Obtenertareas(){

        //////////////////// con api fetch ////////////////////////
        // fetch("http://127.0.0.1:8000/productos/")
        // .then(res => res.json())
        // //.then(data => console.log(data))
        // .then(data => {
        // //console.log(data);
        // this.setState({productos:data});
        //     console.log(this.state.productos);
        // })
        //////////////////// con api fetch ////////////////////////

        ///////////////////// con axios ///////////////////////////
        axios.get('http://127.0.0.1:8000/productos/', {
            responseType: 'json'
        })
        .then((res)=>{
            if(res.status===200) {
                //imprecion del arreglo el status de la peticion al servidor 
                console.log(res);
                //imprecion de la arreglo data que contiene los datos exitentes en el servidor 
                console.log(res.data);
                //guardado de los datos temporales en el estado del componente
                this.setState({productos:res.data});
            }
        })
        .catch((e)=> {
            //por si manda un error de no haber datos 
            console.log(e);
         });
        ///////////////////// con axios ///////////////////////////
    }

    //eventp o metodo para  inssertar y o actualizar una tarea, que hace una peticion al servidor por metodo POST para insertar o por metodo PUT para actualizar
    AgregarYActulizarTarea(e){
        if(this.state.cod_producto){
            //console.log(">>>>>>>>>>>>>>>>>>>>>>>><"+this.state._id)
            //////////////////// con api fetch ////////////////////////
            console.log("si exite un id actulizalo");
            // fetch('http://127.0.0.1:8000/api/tareas/'+this.state.id+'/',{
            //     method: 'PUT',
            //     body: JSON.stringify(this.state),
            //     headers:{
            //         "Accept": "application/json",
            //         "Content-Type": "application/json"
            //     }  
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data);
            //     this.setState({titulo:"", descrip:"", id:""});
            //     this.Obtenertareas();
            //     toast.success("Tarea actualizada...",{
            //         position: toast.BOTTOM_LEFT
            //     });
            // });
            //////////////////// con api fetch ////////////////////////


            ///////////////////// con axios ///////////////////////////
            axios.put('http://127.0.0.1:8000/productos/'+this.state.cod_producto+'/',{
                //Re guardar los datos actualizados
                descripcion:this.state.descripcion,
                stock:this.state.stock,
                provedor:this.state.provedor,
                fecha_ingreso:this.state.fecha_ingreso,
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                } 
            })
            .then(res => {
                //mostramos la respuesta del servidor por consola 
                console.log(res);
                //limpiamos el estado del componente 
                this.setState({cod_producto:"",descripcion:"",stock:"",proveedor:"",fecha_ingreso:""}); 
                //volvemos  repentir con los datos de la base de datos actualizados 
                this.Obtenertareas();
                //mandamos la notificacion conel toast
                toast.success("Producto actualizado...",{
                    position: toast.BOTTOM_LEFT
                });
            });
            ///////////////////// con axios ///////////////////////////
        }else{
            console.log("no exite un id de inicio, inserta nuevo registro");

            //para verificar si esta funcionando el metodo al dar clik por mensaje en consola 
            //console.log("agregar tarea...");
            //para mostrar el estado del componente por consola 
            //console.log(this.state);

            //para mandar datos hacia el servidor usaremos el metodo fetch 
            //se debe especificar hacia que ruta se hara la peticion en este caso "/api/tareas"
            //que es el api que ya hemos creado 

            //en ves de usar fetch como metodo de envio de datos se puede usar la libreria superint, asios 
            //para hacer una peticion al servidor en este caso de insertar datos por el metodo post en formato json
            
            //////////////////// con api fetch ////////////////////////
            // fetch("http://127.0.0.1:8000/api/tareas/",{
            //     //parametros que se pasaran por el metodo post
            //     //body es una variable que almacena los datos en formatos json
            //     //el metodo JSON.stringify() hace una convercion de datos a formato json
            //     //al usar this.state se usan todo los datos del componente en este caso titulo:'',descrip:'', tareas:[], id:''                
            //     //metodo post se usa para insertar datos 
            //     method:"POST",
            //     //para convertir el estado a un string json   
            //     body: JSON.stringify(this.state),
            //     headers:{
            //         "Accept": "application/json",
            //         "Content-Type": "application/json"
            //     }   
            // })

            // //.then(res => console.log(res))
            // .then(res => res.json())
            // //.then(data => console.log(data))
            // .then(data => {
            //     console.log(data);
            //     //intentar mandar una notificacion de que ha sido enviada la peticion 
            //     //de forma grafica 
            //     //<ComponenteToast/>
            //     this.setState({titulo:"",descrip:""}); 
            //     this.Obtenertareas();
            //     toast.success("Tarea agregada...",{
            //         position: toast.BOTTOM_LEFT
            //     });
            // })  
            // .catch(err => {
            //     console.log(err)
            // });
            //////////////////// con api fetch ////////////////////////


            ///////////////////// con axios ///////////////////////////
            //otro ejemplo https://www.digitalocean.com/community/tutorials/react-axios-react-es
            //https://desarrolloweb.com/articulos/axios-ajax-cliente-http-javascript.html
            //https://www.digitalocean.com/community/tutorials/react-axios-react-es
            //https://masteringjs.io/tutorials/axios/post-json
  
            //console.log(this.state);
            axios.post('http://127.0.0.1:8000/productos/', {
                // enviar variables individuales
                descripcion:this.state.descripcion,
                stock:this.state.stock,
                provedor:this.state.provedor,
                fecha_ingreso:this.state.fecha_ingreso,
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }   
            })
            .then((res) =>{
                //imprecion del arreglo el status de la peticion al servidor 
                console.log(res);
                //imprecion de la arreglo data que contiene los datos exitentes en el servidor 
                console.log(res.data);
                //para limpiar las variables del estado del componente
                this.setState({cod_producto:"",descripcion:"",stock:"",proveedor:"",fecha_ingreso:""}); 
                //volvemos a mostrar todod los datos originales 
                this.Obtenertareas();
                //y mostrar la notificacion visual con el toast
                toast.success("Producto agregado...",{
                    position: toast.BOTTOM_LEFT
                });
            })
            .catch(e => {
                console.log(e);
            });

            ///////////////////// con axios ///////////////////////////
        }
            
        
        //para evitar refresco en la vista al enviar datos 
        e.preventDefault();
    }

    //evento o metodo eliminar registros, que hace una peticion al servidor por el metodo DELETE
    EliminaProducto(cod_producto){
        //if(window.confirm("estas seguro que deseas eliminar este registro...")){
             //para concatenar con + y con {$}
 
         //////////////////// con api fetch ////////////////////////
         // console.log("eliminando tarea...",id);
         //     //peticion al servidorr para eliminar 
         //     //manera de concatenas con +
         //     //fetch("/api/tareas/"+id)
         //     //manera de concatenas con ${}
         // fetch('http://127.0.0.1:8000/api/tareas/'+id,{
         //     method:'DELETE',
         //     headers:{
         //         "Accept": "application/json",
         //         "Content-Type": "application/json"
         //     }
         // })
         // .then(res => res.json())    
         // .then(data => {
         //     console.log(data);
         //     this.Obtenertareas();
         // }).catch(err => {
         //     console.log(err)
         //     this.Obtenertareas();
         //     toast.error("Tarea elimnada...",{
         //         position: toast.BOTTOM_LEFT
         //     });
         // });
         //////////////////// con api fetch ////////////////////////
         
 
 
         ///////////////////// con axios ///////////////////////////
         console.log("eliminando producto...",cod_producto);
         //se le pasa el url y el identificador
         axios.delete('http://127.0.0.1:8000/productos/'+cod_producto,{
             headers:{
                 "Accept": "application/json",
                 "Content-Type": "application/json"
             }
         })   
         .then((res) => {
             //console.log(">>>>>>"+res.status);
             //si el status se verifica que ya sea eliminado lo que hacemos es volver a pintar los datos 
             //por consola y en la interfaz grafica
             if(res.status===204) {
                 //console.log(res.status);
                 this.Obtenertareas();
                 toast.error("Producto elimnada...",{
                         position: toast.BOTTOM_LEFT
                 });
             }
         }).catch((e) => {
             //si ocurre un error lo mostramos por consola y no se para la ejecucion de la aplicacion
             console.log(e);
         });
         ///////////////////// con axios ///////////////////////////
         
     }
     //evento o metodo que obtiene el registro por medio del ID seleccionado, donde se hace una peticion de un solo resgistro 
     ObtenerIdParaActualizar(){
 
             //////////////////// con api fetch ////////////////////////
             //async ObtenerIdParaActualizar(id){
             //console.log("actualizando tarea..."+id);
             // await fetch('http://127.0.0.1:8000/api/tareas/'+id)
             //     .then(res => res.json())//convierte la peticion a formato json
             //     .then(data => {
             //         console.log(data);
             //         //actualiza el estado
             //         this.setState({
             //             titulo: data.titulo,
             //             descrip: data.descrip,
             //             id: data.id
             //         })
             // });// mustra los datos obtenidos por consola
             //////////////////// con api fetch ////////////////////////
             
 
             //////
             ///////////////////// con axios ///////////////////////////
         axios.get('http://127.0.0.1:8000/productos/'+cod_producto)
             .then(res => {
                 console.log(res.data);
                 //actualizamos  el estado
                 this.setState({
                     descripcion: res.data.descripcion,
                     stock: res.data.stock,
                     proveedor:res.data.proveedor,
                     fecha_ingreso:res.data.fecha_ingreso,
                     cod_producto: res.data.cod_producto
                 })
             })
             .catch((e) => {
                 //si ocurre un error lo mostramos por consola y no se para la ejecucion de la aplicacion
                 console.log(e);
             });
 
             ///////////////////// con axios ///////////////////////////
 
     }



    //evento que supervisa y inserion de datos en el formuario 
    ManejarElCambio(e){
        //e.target obtiene todo el elemento al detectar el evento  
        //e.target.value obtiene el valor especifico del elemento al detectar el evento  
        //e.target.name obtiene el nombre especifico del elemento al detectar el evento 
        //console.log(e.target.name);
        //obtenemos el nombre y el valor de target o elemento input del formulario 
        const {name, value } = e.target;
        //cambiamos el estado del componente mediante el metodo setState
        this.setState({
            [name]:value
        });
    }

    render() {
        return (
            <div>
                <div className="row fondoDiv3 ">
                    <div className="col-12">
                        <h1>Operaciones CRUD with laravel and Axios...</h1>
                        <div>
                        <Button className='centrar' color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                            Insertar, Actulizar, Delete
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                        
                                <div className="row">
                                    <div className="col-4 fondoDiv1 ">
                                        <form onSubmit={this.AgregarYActulizarTarea} method="post">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/*usamos la propieddad name para identificar a lo imputs , a este lo llamamos descrip*/}
                                                    {/*en este caso verficamos cuando se escriba cualquier cosa con el evento onchange por el metodo ManejarElCambio*/}
                                                    {/* <textarea type="text" name="descrip"  placeholder="Descripcion" onChange={this.ManejarElCambio} value={this.state.descrip}></textarea> */}
                                                    <input type="text" name="descripcion"  placeholder="Descripcion" onChange={this.ManejarElCambio} value={this.state.descripcion}></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    {/*usamos la propieddad name para identificar a lo imputs , a este lo llamamos descrip*/}
                                                    {/*en este caso verficamos cuando se escriba cualquier cosa con el evento onchange por el metodo ManejarElCambio*/}
                                                    {/* <textarea type="text" name="descrip"  placeholder="Descripcion" onChange={this.ManejarElCambio} value={this.state.descrip}></textarea> */}
                                                    <input type="text" name="stock"  placeholder="Stock" onChange={this.ManejarElCambio} value={this.state.stock}></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    {/*usamos la propieddad name para identificar a lo imputs , a este lo llamamos descrip*/}
                                                    {/*en este caso verficamos cuando se escriba cualquier cosa con el evento onchange por el metodo ManejarElCambio*/}
                                                    {/* <textarea type="text" name="descrip"  placeholder="Descripcion" onChange={this.ManejarElCambio} value={this.state.descrip}></textarea> */}
                                                    <input type="text" name="provedor"  placeholder="Provedor" onChange={this.ManejarElCambio} value={this.state.provedor}></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    {/*usamos la propieddad name para identificar a lo imputs , a este lo llamamos descrip*/}
                                                    {/*en este caso verficamos cuando se escriba cualquier cosa con el evento onchange por el metodo ManejarElCambio*/}
                                                    {/* <textarea type="text" name="descrip"  placeholder="Descripcion" onChange={this.ManejarElCambio} value={this.state.descrip}></textarea> */}
                                                    <input type="text" name="fecha_ingreso"  placeholder="Fecha ingreso " onChange={this.ManejarElCambio} value={this.state.fecha_ingreso}></input>
                                                </div>
                                            </div>
                                            
                                            
                                            <div className="row">
                                                <div className="col-12">
                                                    <Button variant="primary" type="submit">Insertar</Button><br/>
                                                </div>
                                            </div>
                                            <ToastContainer autoClose={1500}/>
                                        </form>
                                    </div>
                                    <div className="col-8 fondoDiv2">
                                        <Table hover size="sm" responsive>
                                            <thead>
                                                <tr>
                                                    <th>cod_producto</th>
                                                    <th>descripcion</th>
                                                    <th>stock</th>
                                                    <th>provedor</th>
                                                    <th>fecha_ingreso</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {   //METODO MAP PARA HACER EL CORRIDO DE LA LISTA QUE CONTIENE LOS DATOS 
                                                    this.state.productos.map(producto => {
                                                        return(
                                                            // KEY QUE IDENTIFICA CADA UNO DE LOS REGISTROS 
                                                            // SE USAN LLAVES {} PARA PODER USAR JAVASCRIPT Y NO JSX 
                                                            <tr key = {producto.cod_producto}>
                                                                <td>  {producto.cod_producto}  </td>   
                                                                <td>  {producto.descripcion}  </td>
                                                                <td>  {producto.stock} </td>
                                                                <td>  {producto.proveedor}  </td>
                                                                <td>  {producto.fecha_ingreso}</td>
                                                                <td>
                                                                    <Button variant="primary" onClick={() => this.EliminaProducto(producto.cod_producto)}> Elimina </Button><br/>
                                                                </td>
                                                                <td>
                                                                    <Button variant="primary" onClick={() => this.ObtenerIdParaActualizar(producto.cod_producto)}> Act </Button><br/>
                                                                </td>
                                                            </tr> 
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                        </UncontrolledCollapse>
                        </div>
                    </div>
                </div>
                 
            </div> 
        );
    }
}

export default CrudProducto;