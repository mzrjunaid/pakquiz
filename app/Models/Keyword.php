<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    protected $fillable = ['keyword'];

    protected $hidden = ['pivot'];

    public function pages()
    {
        return $this->morphedByMany(Page::class, 'keywordable');
    }

    public function mcqs()
    {
        return $this->morphedByMany(Mcq::class, 'keywordable');
    }
}
