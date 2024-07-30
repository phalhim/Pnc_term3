<?php 
// include of header
require 'includes/header.php'; 

// include navbar
require 'includes/navbar.php';

//  include of pages 
if (isset($_GET['page'])) 
{
   $page = 'pages/' . $_GET['page'] . '.php';
   if (file_exists($page)) 
   {
       require $page;
   } else {
        require 'pages/404.php'; 
   }
}else {
    require 'pages/home.php'; 
}
 
//  include of footer 
require 'includes/footer.php';




