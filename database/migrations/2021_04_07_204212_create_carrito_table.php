<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarritoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   
        //tipos de datos en tablas de laravel 
        //en esta pagina 
        //https://laravel.com/docs/6.x/migrations#creating-columns

        // $table->bigIncrements('id');	Auto-incrementing UNSIGNED BIGINT (primary key) equivalent column.
        // $table->bigInteger('votes');	BIGINT equivalent column.
        // $table->binary('data');	BLOB equivalent column.
        // $table->boolean('confirmed');	BOOLEAN equivalent column.
        // $table->char('name', 100);	CHAR equivalent column with a length.
        // $table->date('created_at');	DATE equivalent column.
        // $table->dateTime('created_at', 0);	DATETIME equivalent column with precision (total digits).
        // $table->dateTimeTz('created_at', 0);	DATETIME (with timezone) equivalent column with precision (total digits).
        // $table->decimal('amount', 8, 2);	DECIMAL equivalent column with precision (total digits) and scale (decimal digits).
        // $table->double('amount', 8, 2);	DOUBLE equivalent column with precision (total digits) and scale (decimal digits).
        // $table->enum('level', ['easy', 'hard']);	ENUM equivalent column.
        // $table->float('amount', 8, 2);	FLOAT equivalent column with a precision (total digits) and scale (decimal digits).
        // $table->geometry('positions');	GEOMETRY equivalent column.
        // $table->geometryCollection('positions');	GEOMETRYCOLLECTION equivalent column.
        // $table->increments('id');	Auto-incrementing UNSIGNED INTEGER (primary key) equivalent column.
        // $table->integer('votes');	INTEGER equivalent column.
        // $table->ipAddress('visitor');	IP address equivalent column.
        // $table->json('options');	JSON equivalent column.
        // $table->jsonb('options');	JSONB equivalent column.
        // $table->lineString('positions');	LINESTRING equivalent column.
        // $table->longText('description');	LONGTEXT equivalent column.
        // $table->macAddress('device');	MAC address equivalent column.
        // $table->mediumIncrements('id');	Auto-incrementing UNSIGNED MEDIUMINT (primary key) equivalent column.
        // $table->mediumInteger('votes');	MEDIUMINT equivalent column.
        // $table->mediumText('description');	MEDIUMTEXT equivalent column.
        // $table->morphs('taggable');	Adds taggable_id UNSIGNED BIGINT and taggable_type VARCHAR equivalent columns.
        // $table->uuidMorphs('taggable');	Adds taggable_id CHAR(36) and taggable_type VARCHAR(255) UUID equivalent columns.
        // $table->multiLineString('positions');	MULTILINESTRING equivalent column.
        // $table->multiPoint('positions');	MULTIPOINT equivalent column.
        // $table->multiPolygon('positions');	MULTIPOLYGON equivalent column.
        // $table->nullableMorphs('taggable');	Adds nullable versions of morphs() columns.
        // $table->nullableUuidMorphs('taggable');	Adds nullable versions of uuidMorphs() columns.
        // $table->nullableTimestamps(0);	Alias of timestamps() method.
        // $table->point('position');	POINT equivalent column.
        // $table->polygon('positions');	POLYGON equivalent column.
        // $table->rememberToken();	Adds a nullable remember_token VARCHAR(100) equivalent column.
        // $table->set('flavors', ['strawberry', 'vanilla']);	SET equivalent column.
        // $table->smallIncrements('id');	Auto-incrementing UNSIGNED SMALLINT (primary key) equivalent column.
        // $table->smallInteger('votes');	SMALLINT equivalent column.
        // $table->softDeletes(0);	Adds a nullable deleted_at TIMESTAMP equivalent column for soft deletes with precision (total digits).
        // $table->softDeletesTz(0);	Adds a nullable deleted_at TIMESTAMP (with timezone) equivalent column for soft deletes with precision (total digits).
        // $table->string('name', 100);	VARCHAR equivalent column with a length.
        // $table->text('description');	TEXT equivalent column.
        // $table->time('sunrise', 0);	TIME equivalent column with precision (total digits).
        // $table->timeTz('sunrise', 0);	TIME (with timezone) equivalent column with precision (total digits).
        // $table->timestamp('added_on', 0);	TIMESTAMP equivalent column with precision (total digits).
        // $table->timestampTz('added_on', 0);	TIMESTAMP (with timezone) equivalent column with precision (total digits).
        // $table->timestamps(0);	Adds nullable created_at and updated_at TIMESTAMP equivalent columns with precision (total digits).
        // $table->timestampsTz(0);	Adds nullable created_at and updated_at TIMESTAMP (with timezone) equivalent columns with precision (total digits).
        // $table->tinyIncrements('id');	Auto-incrementing UNSIGNED TINYINT (primary key) equivalent column.
        // $table->tinyInteger('votes');	TINYINT equivalent column.
        // $table->unsignedBigInteger('votes');	UNSIGNED BIGINT equivalent column.
        // $table->unsignedDecimal('amount', 8, 2);	UNSIGNED DECIMAL equivalent column with a precision (total digits) and scale (decimal digits).
        // $table->unsignedInteger('votes');	UNSIGNED INTEGER equivalent column.
        // $table->unsignedMediumInteger('votes');	UNSIGNED MEDIUMINT equivalent column.
        // $table->unsignedSmallInteger('votes');	UNSIGNED SMALLINT equivalent column.
        // $table->unsignedTinyInteger('votes');	UNSIGNED TINYINT equivalent column.
        // $table->uuid('id');	UUID equivalent column.
        // $table->year('birth_year');	YEAR equivalent column.


        Schema::create('carrito', function (Blueprint $table) {
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
        Schema::dropIfExists('carrito');
    }
}
