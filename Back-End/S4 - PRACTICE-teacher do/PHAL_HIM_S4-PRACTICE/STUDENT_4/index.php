<?php 
// include of header
require_once 'includes/header.php';
// include navbar
require_once 'includes/navbar.php';
//  include of pages 
if(isset($_GET['page'])){
    $page = 'pages/' . $_GET['page'] . '.php';
    if(file_exists($page))
    {
        require $page;
    }else{
        require 'pages/404.php';
    }
}else{
    require 'pages/home.php';
}
//  include of footer 
require_once 'includes/navbar.php';


