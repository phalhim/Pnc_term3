<?php 
require_once('database.php');
if(isset($_POST['id'])){
    $id = $_POST['id'];
    $statement = $db->prepare("DELETE FROM posts WHERE id = :id");
    $statement ->execute([
    ':id' => $id,
    
]);
}


header('Location:index.php');


