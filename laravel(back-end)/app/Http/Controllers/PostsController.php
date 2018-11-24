<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostsController extends Controller
{
    public function index(){
        $userList = array();
        for ($i=1; $i < 21; $i++) { 
            $userList[] = array(
                'username' => 'User - '.$i,
                'mobile' => rand(111111111, 999999999)
            );            
        }
        $finalResult = array(
            'success' => true,
            'items' => $userList
        );
        return $finalResult;
    }
}
