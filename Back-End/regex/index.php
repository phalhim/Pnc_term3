<?php
#we want to add word (+) 
# (\s)=spaer
#(\d) = number 
#(\) we want to add all you 

$regex = "/^[A-Z][a-z][\d]$/";
$regex = "/^[a-z]{2,}+$/";
$regex = "/^[A-Z]{2,}+$/";
$regex = "/^[A-Za-z\d]{1,10}$/";
$regex = "/^[(][\d]{3}[)][\s][\d]{3}[\s][\d]{3}[\s][\d]{3}$/";

$regex = "/^[a-z\d]+@[a-z\d]+\.[a-z]{2,}$/";

$message = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (preg_match($regex, $_POST['text'])) {
        $message = "😊";

    } else {
        $message = "😢";
    }
}
?>
<form method="post">
    <input type="text" name="text">
    <button>Submit</button>
   <?= $message !=""? $message : "" ?>
</form>