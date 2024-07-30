<?php
// TODO
require_once ('database.php');
if(isset($_GET['id'])){
    $id=$_GET['id'];
    $statement = $db->prepare("DELETE FROM users where id = :id");
    $statement->execute([
            ':id'=>$id,
        ]);
    header('location: index.php');
}

