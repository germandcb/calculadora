<?php 

require 'assets/includes/database.php';

//Accedermos a la db
$db = conectarDB();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $operacion = $_POST['operacion'];
    $entrada = $_POST['entrada'];
    $salida = $_POST['pantalla'];

    
    $query = "INSERT INTO historial (operacion, entrada, salida) VALUES ( '{$operacion}', '{$entrada}', '{$salida}' );";

    mysqli_query($db, $query);

}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>    
    <main class="contenedor">
        <form class="calculadora" method="post">
            <div class="caja">
                <input class="pantalla" id="pantalla" type="textfield" name="pantalla" autocomplete="off" readonly>
            </div>
            <div class="botones">
                <p>
                <input class="btn" id="sen" type="button" value="sen">
                <input class="btn" id="cos" type="button" value="cos">
                <input class="btn" id="tan" type="button" value="tan">
                </p>
                <p>
                <input class="btn" id="csc" type="button" value="csc">
                <input class="btn" id="sec" type="button" value="sec">
                <input class="btn" id="ctan" type="button" value="ctan">
                </p>
                <p>
                <input class="btn" id="7" type="button" value="7" >
                <input class="btn" id="8" type="button" value="8" >
                <input class="btn" id="9" type="button" value="9" >
                <input class="btn suma" id="+" type="button" value="+" >
                </p>
                <p>
                <input class="btn" id="4" type="button" value="4" >
                <input class="btn" id="5" type="button" value="5" >
                <input class="btn" id="6" type="button" value="6" >
                <input class="btn resta" id="-" type="button" value="-" ">
                </p>

                <p>
                <input class="btn" id="1" type="button" value="1" >
                <input class="btn" id="2" type="button" value="2" >
                <input class="btn" id="3" type="button" value="3" >
                <input class="btn multiplicacion" id="x" type="button" value="X" >
                </p>
                <p>
                <input class="btn" id="0" type="button" value="0" >
                <input class="btn" id="c" type="button" value="C">
                <input class="btn igual" id="=" type="button" value="=">
                <input class="btn division" id="/" type="button" value="/">
                </p>
                <input type="hidden" id="operacion" name="operacion">
                <input type="hidden" id="entrada" name="entrada">
                <input class="btn-guardar" type="submit" value="Guardar Operacion">
            </div>
            
        </form>
    </main>
    <script src="./assets/js/app.js" type="module"></script>
</body>
</html>