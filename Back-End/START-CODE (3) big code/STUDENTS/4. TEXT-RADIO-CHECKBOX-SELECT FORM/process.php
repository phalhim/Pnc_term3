<?php require_once 'templates/header.php' ?>
<table class="table table-striped table-bordered">
    <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
        <th>Number</th>
        <th>Message</th>
        <th>Provinces</th>
        <th>Gender</th>
        <th>Subject</th>
    </tr>
    <?php
  
    ?>
        <tr>
            <td><?php echo $_POST['text-input']; ?></td>
            <td><?php echo $_POST['email-input']; ?></td>
            <td><?php echo $_POST['password-input'];?></td>
            <td><?php echo $_POST['number-input']; ?></td>
            <td><?php echo $_POST['message']; ?></td>
            <td><?php 
                if(isset($_POST['province'])){
                    $province = $_POST['province'];
                    echo $province;
                }else{
                    echo "Please select a province ";
                }
            ?></td>
            <td>
                <?php 
                    if(isset($_POST['gander'])){
                        echo $_POST['gander']=="Female" ? "girl" : "boy";
                    }
                ?>
            </td>
            <td>
                <?php 
                    if (isset($_POST['skill'])){
                        foreach($_POST['skill'] as $skill)
                        echo $skill." | ";
                    }
                ?>
            </td>
        </tr>
 
</table>
<?php require_once 'templates/footer.php' ?>