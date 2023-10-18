<?php 

function conectarDB() : mysqli {
    $db = mysqli_connect("localhost","root","root","calculadora");

    if (!$db) {
        echo 'No se pudo conectar a la db';
    }

    return $db;
}
?>