<?php require_once "./templates/header.php" ?>
    <?php
    try {
        $db_connection = new PDO("mysql:host=localhost; dbname=student_db", "root", "");
        $query = "SELECT * FROM students";
        $statement = $db_connection->prepare($query);
        $statement->execute();
        $students = $statement->fetchAll();

    } catch (PDOException $error) {
        echo "Your connection is Error";
    }
    ?>
    <div class="container mt-5">
        <table class="table">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
            </tr>
            <tbody>
                <?php foreach ($students as $student) { ?>
                       <tr>
                            <td><?= $student["id"] ?></td>
                            <td><?= $student["name"] ?></td>
                            <td><?= $student["age"] ?></td>
                            <td><?= $student["email"] ?></td>
                       </tr>
                <?php } ?>
            </tbody>
        </table>    
    </div>

<?php require_once "./templates/footer.php" ?>