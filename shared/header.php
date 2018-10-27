<?php

    function isSiteLinkActive($link) {
        global $currentSitePage;

        if ($link === $GLOBALS['currentSitePage']) {
            echo 'class="active" ';
        }
        else {
            echo 'class="'.$currentSitePage.'" ';
        }
    }

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <link rel="shortcut icon" href="/images/favicon.png">

  <link href="https://fonts.googleapis.com/css?family=Merriweather:900" rel="stylesheet">
  <link href="/css/fonts/avenir/stylesheet.css" rel="stylesheet">
  <link rel="stylesheet" href="/css/main.css"/>

  <title>Design Thinking from Fluff and Logic</title>
</head>

<body>
    <main>

        <header>
            <a href="/">
                <h1 class="brand">
                    Fluff and Logic
                </h1>
            </a>

            <nav>
                <ul>
                    <li><a href="/" <?php echo isSiteLinkActive('home') ?>>Home</a></li>
                    <li><a href="/pages/why/" <?php isSiteLinkActive('why') ?>>Why</a></li>
                    <li><a href="/pages/what/" <?php isSiteLinkActive('what') ?>>What</a></li>
                    <!-- <li><a href="/pages/where/" <?php isSiteLinkActive('where') ?>>Where</a></li> -->
                    <li><a href="/pages/who/" <?php isSiteLinkActive('who') ?>>Who</a></li>
                </ul>
            </nav>
        </header>