<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Drop redundant keywordables and keywords tables to free massive storage
        Schema::dropIfExists('keywordables');
        Schema::dropIfExists('keywords');

        // 2. Optimize the taggables pivot table
        if (Schema::hasTable('taggables')) {
            $driver = DB::getDriverName();

            if ($driver === 'mysql') {
                // Delete duplicate tag assignments if any exist before creating composite primary key
                DB::statement("
                    DELETE t1 FROM taggables t1
                    INNER JOIN taggables t2 
                    WHERE t1.id > t2.id 
                      AND t1.tag_id = t2.tag_id 
                      AND t1.taggable_id = t2.taggable_id 
                      AND t1.taggable_type = t2.taggable_type
                ");

                // Drop id and timestamps and set composite primary key in MySQL
                DB::statement("
                    ALTER TABLE taggables 
                    DROP COLUMN id,
                    DROP COLUMN created_at,
                    DROP COLUMN updated_at,
                    ADD PRIMARY KEY (tag_id, taggable_id, taggable_type)
                ");
            } elseif ($driver === 'pgsql') {
                // Delete duplicate tag assignments in PostgreSQL
                DB::statement("
                    DELETE FROM taggables a USING taggables b
                    WHERE a.id > b.id
                      AND a.tag_id = b.tag_id
                      AND a.taggable_id = b.taggable_id
                      AND a.taggable_type = b.taggable_type
                ");

                // Drop id and timestamps and set composite primary key in PostgreSQL
                DB::statement("
                    ALTER TABLE taggables 
                    DROP COLUMN IF EXISTS id CASCADE,
                    DROP COLUMN IF EXISTS created_at,
                    DROP COLUMN IF EXISTS updated_at,
                    ADD PRIMARY KEY (tag_id, taggable_id, taggable_type)
                ");
            } else {
                Schema::table('taggables', function (Blueprint $table) {
                    if (Schema::hasColumn('taggables', 'created_at')) {
                        $table->dropTimestamps();
                    }
                    if (Schema::hasColumn('taggables', 'id')) {
                        $table->dropColumn('id');
                    }
                    $table->primary(['tag_id', 'taggable_id', 'taggable_type'], 'taggables_primary');
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Recreate taggables structure
        if (Schema::hasTable('taggables')) {
            $driver = DB::getDriverName();

            if ($driver === 'mysql') {
                DB::statement("
                    ALTER TABLE taggables 
                    DROP PRIMARY KEY,
                    ADD COLUMN id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY FIRST,
                    ADD COLUMN created_at TIMESTAMP NULL DEFAULT NULL,
                    ADD COLUMN updated_at TIMESTAMP NULL DEFAULT NULL
                ");
            } elseif ($driver === 'pgsql') {
                DB::statement("
                    ALTER TABLE taggables 
                    DROP CONSTRAINT IF EXISTS taggables_pkey,
                    ADD COLUMN id BIGSERIAL PRIMARY KEY,
                    ADD COLUMN created_at TIMESTAMP NULL DEFAULT NULL,
                    ADD COLUMN updated_at TIMESTAMP NULL DEFAULT NULL
                ");
            } else {
                Schema::table('taggables', function (Blueprint $table) {
                    $table->dropPrimary('taggables_primary');
                    $table->id()->first();
                    $table->timestamps();
                });
            }
        }

        // Recreate keywords table
        if (!Schema::hasTable('keywords')) {
            Schema::create('keywords', function (Blueprint $table) {
                $table->id();
                $table->string('keyword')->unique();
                $table->timestamps();
            });
        }

        // Recreate keywordables table
        if (!Schema::hasTable('keywordables')) {
            Schema::create('keywordables', function (Blueprint $table) {
                $table->id();
                $table->foreignId('keyword_id')->constrained()->cascadeOnDelete();
                $table->morphs('keywordable');
                $table->timestamps();
            });
        }
    }
};
