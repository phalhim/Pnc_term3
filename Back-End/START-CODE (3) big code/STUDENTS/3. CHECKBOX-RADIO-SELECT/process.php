<?php require_once('templates/header.php'); ?>
<?php
// YOUR CODE HERE
?>
    <div class="card mb-3">
        <div class="card-header">Province</div>
        <div class="card-body">
            <h2 class="display-3">
                <?php 
                    if (isset($_POST["province"])) {
                        $province = $_POST["province"];
                        echo $province;
                    } else {
                        echo "Please select a province.";
                    }
                ?>
            </h2>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">Gender</div>
        <div class="card-body">
            <!-- YOUR CODE HERE [gender] -->
            <?php 
            if(isset($_POST['gender'])){
                $manle ='<img src="images/male.png" alt="">';
                $female ='<img src="images/female.png" alt="">';
                echo $_POST['gender'] == "Female" ? "$manle" : "$female";
            }
            ?>
        </div>
    </div>
    <div class="card">
        <div class="card-header">Subject</div>
        <div class="card-body ">

            <?php
                // YOUR CODE HERE [subject]
                if(isset($_POST['subject'])){
                    $color = "<style> .red-text </style>";
                    foreach($_POST['subject'] as $subject)
                    echo $subject . " " .$color;
                }
            ?>
            
        </div>
    </div>

<?php require_once('templates/footer.php'); ?>