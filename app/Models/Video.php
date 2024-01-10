<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    // You can specify the table name if it's not the plural of the model name
    // protected $table = 'your_custom_table_name';

    // Define fillable attributes for mass assignment
    protected $fillable = [
        // List of fillable fields, e.g., 'title', 'url', 'description'
    ];

    // Define relationships, for example, if a video belongs to a user
    // public function user() {
    //     return $this->belongsTo(User::class);
    // }
}

