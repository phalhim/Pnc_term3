<?php require_once("templates/header.php") ;
echo "<ul>";

echo '<img src="img/images (1).jpg" alt="">';

echo "<h1>";
if (isset($_GET['name'])){
    echo " Thx yuo ". $_GET['name'] . " !! ";
}
echo "</h1>";
echo ("<br>");
if(isset($_GET['apply'])){
    echo " Werceived your application for the " . $_GET['apply'];
}
echo ("<br>");

if(isset($_GET['day'])){
    echo "You will be " . $_GET['day'];   
}
echo ('<br>');
if(isset($_GET['skill'])){
    foreach($_GET['skill'] as $skill)
    echo ' You are ' .$skill ." or ";
}
echo "</ul>";

require_once('templates/footer.php');
