<?php
$regexName = "/^[a-zA-Z]{8}$/";
$regexPassword ="/^[a-zA-Z\s\d\.!@#$%]+$/";
$message = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (preg_match($regexName, $_POST['name'])) {
        $message = "😊";
    } else {
        $message = "😢";
    }
    if(preg_match($regexPassword, $_POST['pass'])){
        $message = "😊";
    }else{
        $message = "😢";
    }
     
}
?>
<form method="post">
    <input type="text" name="name" >
    <br>
    <input type="password" name="pass">
    <button>Submit</button>
   <?= $message !=""?  $message: ""?>
</form>