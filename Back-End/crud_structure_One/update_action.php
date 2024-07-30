<?php
// TODO
require_once ('database.php');
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST["id"])){
    $id = $_POST['id'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $province = $_POST['province'];
    $query = "UPDATE users SET name= :name, age= :age, province = :province";
    $statement= $db->perpare($query);
    $statement->execute();
    header("location: index.php ");
}

