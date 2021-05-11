<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Producto;



class ProductoController extends Controller
{   
    //https://www.itsolutionstuff.com/post/laravel-8-crud-application-tutorial-for-beginnersexample.html
    //listado de todos los productos en la base de datos
    public function index(){
        
        // #consuta basica que buscar todos los registros en la base datos 
        // $productos = Producto::all();

        // #retorna la lista de registros 
        // return $productos;

        #para unificar dos tablas 
        #consulta avanzada que enlaza las tablas productos y carrito infos 
        #con una consulta JOIN para obtener la informacion de ambas tablas 

        $productos = DB::table('productos')->join('carrito_infos','productos.cod_producto','=','carrito_infos.cod_producto')
        ->select('productos.cod_producto','productos.descripcion','productos.stock','carrito_infos.descripcion_larga','carrito_infos.precio','carrito_infos.imagen')
        ->get();

        
        return $productos;


    }

    public function show($cod_producto){
        return view('producto.profile',['producto' => Producto::findOrFail($cod_producto)]);
    }


    public function store(Request $peticion)
    {

        # Crear un modelo...
        $producto = new Producto;

        # Establecer propiedades leídas del formulario
        $producto->descripcion = $peticion->get('descripcion');
        $producto->stock = $peticion->get('stock');
        $producto->proveedor = $peticion->get('proveedor');
        $producto->fecha_ingreso = $peticion->get('fecha_ingreso');
        
        # Y guardar modelo ;)
        $producto->save();
        
        
    }

    public function update(Request $peticion, $cod_producto){
        
        # Buscar en base datos...
        $producto = Producto::Find($cod_producto);

        # Establecer propiedades leídas del formulario
        $producto->descripcion = $peticion->get('descripcion');
        $producto->stock = $peticion->get('stock');
        $producto->proveedor = $peticion->get('proveedor');
        $producto->fecha_ingreso = $peticion->get('fecha_ingreso');

         # Y guardar modelo ;)
         $producto->save();

    }

    public function destroy($cod_producto){
        
        # Buscar en base datos...
        $producto = Producto::Find($cod_producto);

        # Elimina en la base datos 
        $producto->delete();

    }



}


