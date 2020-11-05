<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function manufacturer () {
        return $this->belongsTo(Manufacturer::class);
    }

    public function carts () {
        return $this->belongsToMany(Cart::class);
    }

    public function ratings () {
        return $this->hasMany(Rating::class);
    }    
}
