<?php

if(isset($_POST['fistname'])){
    echo $_POST['fistname'];
}else{
    echo "Enter fistname";
}
echo "<br>";
if(isset($_POST['lastname'])){
    echo $_POST['lastname'];
}else{
    echo "Enter lastname";
}
echo "<br>";
if(isset($_POST['pass'])){
    echo $_POST['pass'];
}else{
    echo "Enter password";
}
