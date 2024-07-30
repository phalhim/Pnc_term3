<?php require_once("templates/header.php") ?>

<form action="result.php">
       Name <input type="text" name="name">
       Clch you want to apply <input type="text" name="apply">

    <label> Be frne for you </label>
    <div class="box_radio">
        <input type="radio" name="day" value="Saturday morning" checked > Saturday morning
        <input type="radio" name="day" value="Saturday afternoons"> Saturday afternoons
        <input type="radio" name="day" value="Sunday afternoons"> Sunday afternoons
    </div>

    <label>Yours skills</label>

    <div class="box_checkbox">
        <input type="checkbox" name="skill[]" value="Active listening skills"  checked> Active listening skills
        <input type="checkbox" name="skill[]" value="Communication skills" > Communication skills
        <input type="checkbox" name="skill[]" value="Computer skills" > Computer skills
        <input type="checkbox" name="skill[]" value="Customer service skills" > Customer service skills
        <input type="checkbox" name="skill[]" value="Interpersonal skills" > Interpersonal skills
        <input type="checkbox" name="skill[]" value="Leadership skills" > Leadership skills
        <input type="checkbox" name="skill[]" value="Management skills" > Management skills
        <input type="checkbox" name="skill[]" value="Problem-solving skills" > Problem-solving skills
    </div>

    <button>SUBMIT !</button>
</form>

<?php require_once("templates/footer.php") ?>