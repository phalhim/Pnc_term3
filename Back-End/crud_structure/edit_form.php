<?php require_once 'partials/header.php';?>
<div class="container mt-5">
   <div class="row">
    <div class="col-3"></div>
    <div class="col-6">

        <div class="card bg-light">
            <div class="card-body">
                <?php
                    require_once 'database.php';
                    $id = $_GET['id'];
                    // echo $id;
                    $statement =$db->prepare('SELECT * FROM students WHERE id = :id');
                    $statement->execute([':id'=>$id]);
                    $student = $statement->fetch();
                    // var_dump($student);

                    // header('location: index.php')

                ?>
                <form action="update_action.php" method="POST">
                    <input type="hidden" name="id" value="<?= $student['id'] ?>">
                    <div class="mb-3">
                        <input type="text" name="name" class="form-control" placeholder="Name" value="<?php $student['name'] ?>">
                    </div>
                    <div class="mb-3">
                        <input type="number" name="age" class="form-control" placeholder="age" value="<?php $student['age']?>">
                    </div>
                  
                    <div class="mb-3">
                        <select name="gender" id="" class="form-control">
                            <?php if($student['gender'] == "F"): ?>
                            <option value="F" selected>Female</option>
                            <option value="M">Male</option>
                            <?php else: ?>
                                <option value="F">Female</option>
                                <option value="M"selected>Male</option>
                                <?php  endif;?>
                        </select>
                    </div>
                    <!-- <div class="mb-3">
                        <textarea name="description" class="form-control"></textarea>
                    </div> -->
                    <div class="mb-3 d-grid gap-2">
                        <button class="btn btn-warning btn-block">Update Now</button>
                    </div>
                </form>
        </div>



        
    </div>
    <div class="col-3"></div>
   </div>
</div>
<?php require_once 'partials/footer.php';?>