<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" />
<?php 
if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(isset($_POST['choice']) && isset($_POST['optradio']) && isset($_POST['skill'])){
        $chice = $_POST['choice'];
        $optradio=$_POST['optradio'];
        $skill=$_POST['skill'];

        $result=" "; 
        foreach($_POST['skill'] as $skill)
        $result = $skill . " ,";
    }

?>
<div class="container mt-5">
    <ul class="list-group">
        <li class=" list-group-item"><?= $chice ;?></li>
        <li class=" list-group-item"><?= $optradio ;?></li>
        <li class=" list-group-item"><?= $result ;?></li>
    </ul>
</div>
<?php
}else{
    echo "please fill all the fields ";
}

