<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{   
    //esta es la informaacion que queremos obtener de la tabla producto
    protected $fillable = ['cod_producto','descripcion','stock'];
}
