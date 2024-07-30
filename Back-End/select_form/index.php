<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" />
    
</head>
<body>
    <div class="container mt-5 list-group-item-action">
        <form action="result.php" method="POST">
            <div class="mb-3 ">
                <select name="choice" class="form-cotrol">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <hr>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio1" name="optradio" value="WEB" checked>
                <label class="form-check-label" for="radio1">WEB</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="SNA">
                <label class="form-check-label" for="radio2">SNA</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="radio2" name="optradio" value="Mobile">
                <label class="form-check-label" for="radio2">Mobile</label>
            </div>
            <hr>
            <div class="form-check">
                <input type="checkbox" id="vehicle1" name="skill[]" value="I have a bike">
                <label for="vehicle1"> I have a bike</label><br>
            </div>
            <div class="form-check">
                <input type="checkbox" id="vehicle2" name="skill[]" value="I have a car">
                <label for="vehicle2"> I have a car</label><br>
            </div>
            <hr>
            <div class="mb-3">
                <button class="btn btn-info">submit</button>
            </div>
        </form>
    </div>
</body>
</html>