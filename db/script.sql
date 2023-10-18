
CREATE DATABASE calculadora;

USE calculadora;

CREATE TABLE historial 
(
id int auto_increment primary key,
operacion varchar(20),
entrada varchar(50),
salida varchar(50)
);
