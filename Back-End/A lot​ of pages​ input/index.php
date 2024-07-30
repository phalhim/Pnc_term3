
<?php 
    require_once 'headers/header.php';
    require_once 'database.php';
?>
    <div class="container">
        <table class='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Province</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($students as $student):?>
                    <tr>
                        <td><?php echo $student['name']; ?></td>
                        <td><?php echo $student['age']; ?></td>
                        <td><?php echo $student['gender']; ?></td>
                        <td><?php echo $student['province']; ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
<?php require_once 'headers/header.php';?>