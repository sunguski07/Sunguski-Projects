<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFaultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('faults', function (Blueprint $table) {
            $table->id('fault_no');
            $table->text('description');
            $table->string('equipment');
            $table->string('status');
            $table->unsignedBigInteger('attended_by');
            $table->unsignedBigInteger('r_no');
            $table->foreign('r_no')->references('room_no')->on('rooms');
            $table->foreign('attended_by')->references('officer_id')->on('officers');
            $table->dateTime('occured_no');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('faults');
    }
}
