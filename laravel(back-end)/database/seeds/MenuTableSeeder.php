<?php

use Illuminate\Database\Seeder;

class MenuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menu')->insert([
            ['name' => 'page'],
            ['name' => 'menu'],
            ['name' => 'menu_sub']
   ]);
    }
}
