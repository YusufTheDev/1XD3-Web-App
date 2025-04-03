<?php
//start the session
session_start();

// Check if the user is logged in
$isLoggedIn = isset($_SESSION['userName']);
?>

<!DOCTYPE html>
<html>

<head>
    <title>Infinite Travel - Main Menu</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js"></script>
</head>

<body>
    <div id="menu">
        <h1>Infinite Travel</h1>
        <?php
        //check if the user is logged in
        if ($isLoggedIn) {
            echo '<a href="../game/play.html" class="button"><p>Play</p></a>';
            echo '<a href="upgrades.html" class="button"><p>Upgrades</p></a>';
            echo '<a href="tutorial.html" class="button"><p>Tutorial</p></a>';
            echo '<a href="account.html" class="button"><p>Account</p></a>';
            echo '<input type = "button" value = "logout" id = "logout">';
        } else {
            echo '<a href="../SignUp/index.html"><h1>Sign Up</h1></a>';
            echo '<a href="../Login/index.html"><h1>Login</h1></a>';
        }
        ?>

    </div>

    <div id="gameContainer" style="display: none;">
        <canvas id="gameCanvas"></canvas>
    </div>
</body>

</html>