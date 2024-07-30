<?php
// TODO
require_once 'database.php';
if(isset($_GET['id'])){
    $id = $_GET['id'];
    $statement = $db->prepare('DELETE FROM students WHERE id=:id ');
    $statement->execute([':id' => $id]);
    header('location: index.php');
}
