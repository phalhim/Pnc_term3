<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    if($_POST['username'] !="" ){
        echo htmlentities( $_POST['username']);

    }else{
        echo "Please enter a username ";
    }
    # spes
    echo "<br>";
    if($_POST['pass'] !=""){
        echo htmlentities ( $_POST['pass']);
    }else{
        echo "Please enter a password";
    }

}

function validareInput($value){
    $value = htmlspecialchars($value);
    $value =trim($value);
    return $value;
}