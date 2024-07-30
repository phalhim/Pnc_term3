<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <div class="container mt-5">
        <form action="result.php" method="POST">
            <div class="form_group mb-3">
                <input type="text" class="form-control" name="text-input" placeholder="Enter your name">
            </div>
            <div class="form_group  mb-3">
                <input type="email" class="form-control" name="email-input" placeholder="Enter your email">
            </div>
            <div class="form_group  mb-3">
                <input type="password" class="form-control" name="password-input" placeholder="Enter your passsword">
            </div>
            <div class="form_group  mb-3">
                <input type="number" class="form-control" name="number-input" placeholder="Enter your number">
            </div>
            <div class="form_group  mb-3">
                <textarea name="message" class="form-control" ></textarea>
            </div>
            <div class="form_group">
                <button class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</body>
</html>