<?php
//TODO:
require_once 'database.php';
date_default_timezone_set('Asia/Phnom_Penh');

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    // var_dump($_POST);
    $name=$_POST['name'];
    $age=$_POST['age'];
    $gender=$_POST['gender'];   
    $dod =date('Y-m-d');
    $id =$_POST['id'];
    // echo $dod;

    $statement = $db->prepare("UPDATE students 
    SET name= :name, age= :age, dod=:dod, gender = :gender WHERE id =:id");

    $statement->execute([
        ':id'=>$id,
        ':name'=>$name,
        ':age'=>$age,
        'dod'=>$dod,
        'gender'=>$gender
    ]);
    header('location:index.php');
    
}