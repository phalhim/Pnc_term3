<?php require_once('templates/header.php');  ?>
<ul class="list-group">
<?php
   // YOUR CODE HERE

?>
    <li class="list-group-item"><?php echo $_POST['name']; ?></li>
    <li class="list-group-item"><?php echo $_POST['emails']; ?></li>
    <li class="list-group-item"><?php echo $_POST['passwords']; ?></li>
    <li class="list-group-item"><?php echo $_POST['numbers']; ?></li>
    <li class="list-group-item"><?php echo $_POST['messages']; ?></li>

</ul>
<?php require_once('templates/footer.php'); ?>