<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model

{
    protected $hidden = ['pivot'];

    public function mcqs()
    {
        return $this->morphedByMany(Mcq::class, 'taggable');
    }

    public function subjects()
    {
        return $this->morphedByMany(Subject::class, 'taggable');
    }
}
