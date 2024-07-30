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
                <th>Province</th>
            </tr>
        </thead>
        <tbody>
            <?php require_once('database.php'); 
          
            $statement = $db->prepare("SELECT * FROM users");
            $statement->execute();
            $users = $statement->fetchAll();
            // var_dump($users);
            ?>


            <?php foreach ($users as $user): ?>
                <tr>
                    <td><?= $user['id']; ?></td>
                    <td><?= $user['name']; ?></td>
                    <td><?= $user['age']; ?></td>
                    <td><?= $user['province']; ?></td>
                    <td>
                        <a href="edit_form.php?id=<?= $user['id']?>" class="btn btn-primary btn-sm">Edit</a>
                        <a href="delete_action.php?id=<?= $user['id']?>" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>
            <?php 
            endforeach;
            ?>
            <tr>
                <!-- <td>1</td>
                <td>John</td>
                <td>jonh@gmail.com</td>
                <td>0123456789</td> -->
                <!-- <td>
                    <a href="edit_form.php" class="btn btn-primary btn-sm">Edit</a>
                    <a href="delete_action.php" class="btn btn-danger btn-sm">Delete</a>
                </td> -->
            </tr>
            <!-- <tr>
                <td>2</td>
                <td>Jane</td>
                <td>jane@gmail.com</td>
                <td>0123456789</td>
                <td>
                    <a href="edit_form.php" class="btn btn-primary btn-sm">Edit</a>
                    <a href="delete_action.php" class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>
            </tr> -->
        </tbody>
    </table>
</div>
<?php require_once 'partials/footer.php';?>