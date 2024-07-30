<?php require_once 'partials/header.php';?>
<div class="container mt-5">
    <div class="d-flex justify-content-end align-items-center">
        <a href="create_form.php" class="btn btn-primary btn-sm">Add New +</a>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Dob</th>
                <th>gender</th>
            </tr>
        </thead>
        <tbody>
            <?php require_once ('database.php');
            $statement= $db->prepare('SELECT * FROM students');
            $statement->execute();
            $students = $statement->fetchAll();
            // var_dump($students)
            foreach ($students as $student): 
          
            ?>
            <tr>
                <td><?= $student['id'] ?></td> 
                <td><?= $student['name'] ?></td> 
                <td><?= $student['age'] ?></td> 
                <td><?= $student['dod'] ?></td> 
                <td><?= $student['gender'] ?></td> 
                <td>
                <td>
                    <a href="edit_form.php?id=<?=$student['id'] ?>" class="btn btn-primary btn-sm">Edit</a>
                    <a href="delete_action.php?id=<?=$student['id'] ?>" class="btn btn-danger btn-sm">Delete</a>
                </td>
                </td>
            </tr>
            <!-- <tr>
                <td></td>
                <td>John</td>
                <td>jonh@gmail.com</td>
                <td>0123456789</td>
                <td>
                    <a href="edit_form.php" class="btn btn-primary btn-sm">Edit</a>
                    <a href="delete_action.php" class="btn btn-danger btn-sm">Delete</a>
                </td>
            </tr> -->
            <?php endforeach; ?>
        </tbody>
    </table>
</div>
<?php require_once 'partials/footer.php';?>