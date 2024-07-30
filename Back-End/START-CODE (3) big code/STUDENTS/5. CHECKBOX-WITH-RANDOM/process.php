<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<?php require_once 'templates/header.php' ?>
<?php

$colors = ['primary', 'danger', 'info', 'warning', 'success', 'secondary', 'dark'];
// CODE HERE 

?>
    <div class="card">
        
        <div class="card-body">
            <?php
            // CODE HERE
         
            if(isset($_POST['skill'])){
                foreach($_POST['skill'] as $skills)
                echo $skills . " "; 
            }
 
            ?>
     
        </div>
    </div>


<?php require_once 'templates/footer.php' ?>