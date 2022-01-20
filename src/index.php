<!--
* File: index.php
* Author: Katona Valentin
* Copyright: 2022, Katona Valentin
* Group: Szoft II N
* Date: 2022-01-20
* Github: https://github.com/djvalee/
* Licenc: GNU GPL
-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pentagon terület számítás</title>
    <link rel="stylesheet" href="bootstrap.css">

    <style>
    .center {
      display: block;
      margin-left: auto;
      margin-right: auto;
  }
    </style>
</head>

<body>

        <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" href="index.php">Pentagon terület számítás</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">Névjegy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="github.html">GitHub</a>
            </li>
          </ul>

    <div class="container">
        <h1 class="my-3">Pentagon terület számítás</h1>
        <img src="https://static.javatpoint.com/programs/images/program-to-find-the-area-of-a-pentagon.png" alt="Pentagon" class="center" width="150" height="150">
        <h2>Számolás</h2>
        <div class="mb-3">
            <label for="num1" class="form-label">S oldal:</label>
            <input type="text" class="form-control" id="num1">
        </div>
        <div class="mb-3">
            <label for="num2">A oldal:</label>
            <input type="" class="form-control" id="num2">
            
        </div>
        <button type="button" class="btn btn-primary" id="calcButton">Számít</button>
        <div class="mb-3 mt-3">
            <label for="result">Pentagon Területe:</label>
            <input type="text" class="form-control" id="result" disabled>
        </div>
    </div>
    <script src="app.js"></script>
</body>

</html>