<?php 
require_once 'database.php';

$quary = $db->query('delete from posts where id ='.$_GET['id']);
header('Location:index.php');
