<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/holamundo', function () {
    return view('holamundo');
});

Route::get('/productos', [ProductoController::class, 'index']);


//Route::get('/productos/{cod_producto}', [ProductoController::class, 'show']);
//Route::post('/productos/', [ProductoController::class, 'store']);
//Route::put('/productos/{cod_producto}', [ProductoController::class, 'update']);
//Route::delete('/productos/{cod_producto}', [ProductoController::class, 'destroy']);
// or
//Route::get('/productos', 'ProductoController@index');