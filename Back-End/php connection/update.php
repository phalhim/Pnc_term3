<?php 
require_once 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];
    if (isset($_POST['id'])) {
        $query = $db->query("update posts set name = '$name',description = '$description' where id=" . $_POST['id']);
    }
}

header('Location:index.php');