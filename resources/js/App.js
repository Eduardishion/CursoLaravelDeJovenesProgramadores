import React from "react";
import {Container,Row} from 'reactstrap';
import "./App.css";
import Producto from "./Componentes/Producto";
import Navigation from "./Componentes/Navigation";
import {listaProductos} from './listaProductos.json';
import CrudProducto from "./Componentes/CrudProducto";
import axios from 'axios'; 


//version con clase y mapeo de archivo json y carga en arreglo y muestro a la vista recorriendo cada componente con un map 
//y guardandolo en el arreglo
//verificamos si se ha cargado la lista de productos 
//IMPRIMIMOS POR CONSOLA LOS REGISTROS EN EL ARCHIVO JSON
//console.log(listaProductos);
class App extends React.Component{

  //constructor de clase
  constructor(){
    super();
    //estado del componente
    this.state={
      listaProductos,
      listaProductosDB:[]
    };
  }

  //metodo para inicializar estado de componente antes que nada en la interfaz
  componentDidMount(){
    this.ObtenerProductos();
  }

  ObtenerProductos(){

    //////////////////// con api fetch ////////////////////////
    // fetch("http://127.0.0.1:8000/productos/")
    // .then(res => res.json())
    // //.then(data => console.log(data))
    // .then(data => {
    // //console.log(data);
    // this.setState({listaProductosDB:data});
    //     console.log(this.state.listaProductosDB);
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
            this.setState({listaProductosDB:res.data});
        }
    })
    .catch((e)=> {
        //por si manda un error de no haber datos 
        console.log(e);
     });
    ///////////////////// con axios ///////////////////////////
} 



  render(){
      const arregloComponentes = this.state.listaProductosDB.map(
        (listaProductosDB , i)=>{
          //console.log(i);
          return(
            <Producto 
              //asociamos el indice del producto a sus props para evitar el wairning 
              key= {i}
              titulo = {listaProductosDB.descripcion}
              imagen = {listaProductosDB.imagen}
              descripcion ={listaProductosDB.descripcion}
              precio ={listaProductosDB.precio}
              stock={listaProductosDB.stock}
            />
          )
        }
      );
      return(
        
        <Container>
          <Navigation titulo="App en Laravel y ReactJS" />
          <Row>
           <CrudProducto/>
          </Row>
          <Row>
               {arregloComponentes}    
          </Row>
        </Container>
      ); 
  }
}

//version con funcion
// function App() {
//   return (
//     <div>
//       
//       <Container>
//         <Navigation titulo="Mi primer sitio de compras" />
//         <Row>
//           <Producto
//             titulo="iphone s4"
//             imagen="https://http2.mlstatic.com/D_NQ_NP_756696-MLM42543784317_072020-O.webp"
//             precio="7000"
//             descripcion="iphone s4 con camara de alta deficion "
//           />
//           <Producto
//             titulo="iphone s5"
//             imagen="https://resources.claroshop.com/medios-plazavip/mkt/5aaad569abf0c_ipod-touch-blue_2jpg.jpg"
//             precio="8500"
//             descripcion="iphone s5 con camara de alta deficion"
//           />
//           <Producto
//             titulo="Xaomi"
//             imagen="https://s13emagst.akamaized.net/products/30943/30942473/images/res_a47842d791725a7e0570a13b23ce4aea.jpg"
//             precio="4000"
//             descripcion="Xaomi con camara de alta deficion"
//           />
//           <Producto
//             titulo="iphone s6"
//             imagen="https://s13emagst.akamaized.net/products/478/477523/images/res_05ecd80d248aa3d961b97a7037f45bd9.jpg"
//             precio="10000"
//             descripcion="iphone s6 con camara que permite grabar en hd"
//           />
//         </Row>
//       </Container>
//     </div>
//   );
// }

export default App;
