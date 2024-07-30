<?php require_once('templates/header.php'); ?>
<?php
    // YOUR CODE HERE 
?>
    <div class="alert alert-secondary">
        <strong>Color: </strong> <span><?php echo (isset($_POST["colers"])); ?></span>
    </div>
    <div class="alert alert-info">
        <strong>Range: </strong> <span><?php echo $_POST["range"] ; ?></span>
    </div>
    <div class="alert alert-danger">
        <strong>Date: </strong> <span><?php echo $_POST["date"] ; ?></span>
    </div>

<?php require_once('templates/footer.php'); ?>