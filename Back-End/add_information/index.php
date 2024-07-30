<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/index.js" defer></script>
</head>
<body>
    <div id="wrapper">
        <header>
            <div id="page-banner">
                <h1 class="title" style="color: #fff;">MovieTime</h1>
                <p style="color: #fff;">A curated list of the most amazing movies!</p><br>
            </div>
        </header>
        <div id="movie-list">
            <h2 class="title">Movies to Watch</h2>
            <ul>
                <li>
                    <span class="name">The Intern</span>
                    <span class="delete">delete</span>
                </li>
                <li>
                    <span class="name">Inception</span>
                    <span class="delete">delete</span>
                </li>
                <li>
                    <span class="name">The Prestige</span>
                    <span class="delete">delete</span>
                </li>
                <li>
                    <span class="name">The Wolf of Wall Street</span>
                    <span class="delete">delete</span>
                </li>
            </ul>
        </div>
        <form id="add-movie">
            <input type="text" placeholder="Add a movie..." />
            <button>Add</button>
        </form>
    </div>
</body>
</html>