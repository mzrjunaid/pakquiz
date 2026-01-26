<?php

namespace App\Models\Old;


use App\Traits\GeneratesSlug;
use Illuminate\Database\Eloquent\Model;

class OldCAMcqs extends Model
{

    use GeneratesSlug;
    protected $connection = 'pace_mcqs';
    protected $table = 'add_current_affairs';
    protected $primaryKey = 'ca_id';
    public $timestamps = false;
}
