<?php 

// include of header
require_once 'includes/header.php';
// include navbar
require_once 'includes/navbar.php';
//  include of pages 

if(isset($_GET['page'])){
    $pages = 'pages/' . $_GET['page'] . '.php';
    if(file_exists($pages)){
        require_once $pages;
    }else{
        require_once "pages/404.php";
    }
}else{
    require_once 'pages/home.php';
}
//  include of footer 
require_once 'includes/footer.php';
