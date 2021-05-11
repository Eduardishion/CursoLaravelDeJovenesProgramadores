<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarritoInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carrito_infos', function (Blueprint $table) {
            $table->bigIncrements('cod_carrito'); //id con auto incremento y primary key 
            $table->string('descripcion_larga');  //tipo de dato de cadena 
            $table->decimal('precio');            //tipo de dato con punto decimal 
            $table->string('imagen');             //para guardar imagen 

            //enlace de tabla producto con tabla carrito  
            $table->bigInteger('cod_producto')->index();
            //enlazamos la tabla del producto a esta tabla que estamos creando
            $table->foreign('cod_producto')->references('cod_producto')->on('productos');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carrito_infos');
    }
}
