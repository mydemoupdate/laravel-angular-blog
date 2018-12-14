<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Post extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable();
            $table->longText('content')->nullable();
            $table->string('plug')->nullable();
            $table->string('avatar')->nullable();
            $table->double('date')->nullable();
            $table->boolean('active')->nullable();
            $table->integer('comment_count')->nullable();;
            $table->integer('catagory_id')->unsigned();
            $table->foreign('catagory_id')->references('id')->on('catagory')->onDelete('cascade');;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post');
    }
}
