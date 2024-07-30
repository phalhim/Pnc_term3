<?php
//TODO: GET all values(Gender,Name,Batch,Bio,Skill) from inputs and display the result below
// if($_POST['name'] =='' && $_POST['gender']=='' && $_POST['batch'] =='' && $_POST['bio'] =='' && $_POST['skill'] ==''){
//     $name = $_POST['name'];
//     $gender = $_POST['gender'];
//     $batch = $_POST['batch'];
//     $bio= $_POST['bio'];
//     $skill =$_POST['skill'];
// }

   

?>
<link rel="stylesheet" href="css/style.css">
<div class="user-info">
    <?php 
        
    ?>
    <div class="user-info-header">
        <!-- <img id="userProfile" src="" alt="" > -->
        <?php 
            if(isset($_POST['gender'])){
                $male = "<img src='images/male.jpg' width='200px'";
                $female = "<img src='images/female.jpg' width='200px'";
                $other="<img src='images/other.jpg' width='200px'";
                
                if($_POST['gender']== 'male'){
                    echo $male;
                }
                elseif($_POST['gender']=='female'){
                    echo $female;
                }else{
                    echo $other;
                }
            }
        ?>
        <h2 id="userName"><?php echo $_POST['name'] ?></h2>
        <span>Batch - <span id="userBatch">
        </span>
           <?php 
            if(isset($_POST['batch'])){
                echo $_POST['batch'];
            }
            ?>
        <span>
    </div>
    <div class="user-info-body">
        <p id="userBio"><?php echo $_POST['bio'] ?></p>
        <div id="userSkills">
            <span>
                <?php 
                    $res="";
                    if (isset($_POST['skill'])) {
                        $skill = $_POST['skill'];
                        foreach ($skill as $skills)
                        $res.= $skills.", "; 
                    }
                    echo $res;
                ?>
            </span>
        </div>
    </div>
</div>