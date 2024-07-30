
<?php 
require_once 'includes/navbar.php';
// include of header
require_once 'includes/header.php';
//  include of pages 
$home= 'home';
if(isset($_GET['page'])){
   $home = $_GET['page'];
}
$page = 'pages/' . $home . '.php';
require_once $page;

//  include of footer 
require_once 'includes/footer.php';


