<?php
//TODO:
require_once ('database.php');
if($_SERVER['REQUEST_METHOD'] == "POST"){
    if($_POST['name'] !=='' && $_POST['age'] !=='' && $_POST['province'] !=='');{
        $name = $_POST['name'];
        $age = $_POST['age'];
        $province = $_POST['province'];
        $ststement=$db->prepare("INSERT INTO users(name, age, province) values(:name, :age, :province)");
        $ststement->execute([':name'=>$name,':age'=>$age, ':province'=>$province]);
        header('location: index.php');
    }
}