<?php 
if($_SERVER["REQUEST_METHOD"] == "POST"){
    if($_POST['username'] !=""){
        echo htmlentities ($_POST['username']);
    }else{
        echo "please enter usename";
    }
    echo "<br>";
    if($_POST['password'] !=""){
        echo htmlentities($_POST['password']);
    }else{
        echo "please enter password";
    }
}

function validareInput($value){
    $value = htmlspecialchars($value);
    $value =trim($value);
    return $value;
}