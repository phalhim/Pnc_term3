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
    // echo $dod;
    $statement = $db->prepare('INSERT INTO students(name, age, dod, gender)values(:name, :age, :dod, :gender)');
    $statement->execute([
        ':name'=>$name,
        ':age'=>$age,
        'dod'=>$dod,
        'gender'=>$gender
    ]);
    header('location:index.php');
    
}