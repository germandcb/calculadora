// App
// Definicion de varaibles

let a,b,operacion;
const pantalla = document.getElementById("pantalla");
const cero = document.getElementById("0");
const uno = document.getElementById("1");
const dos = document.getElementById("2");
const tres = document.getElementById("3");
const cuatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const siete = document.getElementById("7");
const ocho = document.getElementById("8");
const nueve = document.getElementById("9");
const suma = document.getElementById("+");
const resta = document.getElementById("-");
const multiplica = document.getElementById("x");
const divide = document.getElementById("/");
const limpia = document.getElementById("c");
const igual = document.getElementById("=");
const seno = document.getElementById("sen");
const coseno = document.getElementById("cos");
const tangente = document.getElementById("tan");
const cosecante = document.getElementById("csc");
const secante = document.getElementById("sec");
const cotangente = document.getElementById("ctan");

let entrada = document.getElementById('entrada');
let tipoOperacion = document.getElementById('operacion');
const guardar = document.querySelector(".btn-guardar");

// Eventos 

cero.addEventListener("click", () => pantalla.value = pantalla.value + "0" )
uno.addEventListener("click", () =>  pantalla.value = pantalla.value + "1");
dos.addEventListener("click", () =>  pantalla.value = pantalla.value + "2");
tres.addEventListener("click", () =>  pantalla.value = pantalla.value + "3");
cuatro.addEventListener("click", () =>  pantalla.value = pantalla.value + "4");
cinco.addEventListener("click", () =>  pantalla.value = pantalla.value + "5");
seis.addEventListener("click", () =>  pantalla.value = pantalla.value + "6");
siete.addEventListener("click", () =>  pantalla.value = pantalla.value + "7");
ocho.addEventListener("click", () =>  pantalla.value = pantalla.value + "8");
nueve.addEventListener("click", () =>  pantalla.value = pantalla.value + "9");

limpia.addEventListener("click", limpiar);

suma.addEventListener("click", sumar);
resta.addEventListener("click", restar);
divide.addEventListener("click", dividir);
multiplica.addEventListener("click", multiplicar);
seno.addEventListener("click", fSeno);
coseno.addEventListener("click", fCoseno);
tangente.addEventListener("click", fTangente);
cosecante.addEventListener("click", fCosecante);
secante.addEventListener("click", fSecante);
cotangente.addEventListener("click", fCotangente);

igual.addEventListener("click", operar);


// Funciones
function limpiar() {
    pantalla.value = "";
    guardar.classList.remove('aparece');
}

function sumar() {
    a = pantalla.value;
    operacion = "+";
    tipoOperacion.value = operacion;
    limpiar();
}
function restar() {
    a = pantalla.value;
    console.log(a);
    if (a == '') {
        pantalla.value = pantalla.value + "-"
    } else {
        a = pantalla.value;
        operacion = "-";
        tipoOperacion.value = operacion;
        limpiar();
    }
}
function multiplicar() {
    a = pantalla.value;
    operacion = "*";
    tipoOperacion.value = operacion;
    limpiar();
}
function dividir() {
    a = pantalla.value;
    operacion = "/";
    tipoOperacion.value = operacion;
    limpiar();
}

function borrar() {
    limpiar();
    a = 0;
    b = 0;
    operacion = "";
}

function fSeno() {
    a = pantalla.value;
    operacion = "sen";
    tipoOperacion.value = operacion;
    limpiar();
    operar();
}

function fCoseno() {
    a = pantalla.value;
    operacion = "cos";
    tipoOperacion.value = operacion;
    limpiar();
    operar();
}
function fCosecante() {
    a = pantalla.value;
    operacion = "csc";
    tipoOperacion.value = operacion;
    limpiar();
    operar();
}

function fSecante() {
    a = pantalla.value;
    operacion = "sec";
    tipoOperacion.value = operacion;
    limpiar();
    operar();
}


function fTangente() {
    a = pantalla.value;
    operacion = "tan";
    tipoOperacion.value = operacion;
    limpiar();
    operar();
}
function fCotangente() {
    a = pantalla.value;
    operacion = "ctan";
    tipoOperacion.value = operacion;
    limpiar();
    operar();
}

function operar() {

    let respuesta = 0;
    if (a === undefined) {
        a = parseInt(pantalla.value);
    }
    if (tipoOperacion.value === undefined) {
        tipoOperacion.value = "=";
    }
    a = parseInt(a);
    b =  parseInt(pantalla.value);
    switch (operacion) {
        case "+":
            respuesta = a + b;
            break;
        case "-":
            respuesta = a - b;
            break;
        case "*":
            respuesta = a * b;
            break;
        case "/":
            respuesta = a / b;
            break;
        case "sen":
            respuesta = calcularSeno(a);
            break;
        case "cos":
            respuesta = calcularCoseno(a);
            break;
        case "tan":
            respuesta = calcularTangente(a);
            break;
        case "csc":
            respuesta = (1 / calcularSeno(a)).toFixed(5);
            break;
        case "sec":
            respuesta = (1 / calcularCoseno(a)).toFixed(5);
            break;
        case "ctan":
            respuesta = (1 / calcularTangente(a)).toFixed(5);
            break;
        default:
            respuesta = a;
            break;
        
    }
    if (tipoOperacion.value == 'sen' || tipoOperacion.value == 'cos' || tipoOperacion.value == 'tan' || tipoOperacion.value == 'csc' || tipoOperacion.value == 'sec' || tipoOperacion.value == 'ctan') {
        entrada.value = `${tipoOperacion.value} (${a})`;
    } else {
        entrada.value = `${a} ${tipoOperacion.value} ${b}`;
    }

    borrar();
    pantalla.value = respuesta;

    if (!pantalla.value) {
        guardar.classList.remove('aparece');
    } else {
        guardar.classList.add('aparece');
        
    }


}

function calcularSeno(aungulo) {

    let anguloEnRadianes = convertirAnguloARadianes(aungulo);
    let seno = Math.sin(anguloEnRadianes);

    return seno.toFixed(5);
}

function calcularCoseno(aungulo) {

    let anguloEnRadianes = convertirAnguloARadianes(aungulo);
    let seno = Math.cos(anguloEnRadianes);

    return seno.toFixed(5);
}

function calcularTangente(aungulo) {

    let anguloEnRadianes = convertirAnguloARadianes(aungulo);
    let seno = Math.tan(anguloEnRadianes);

    return seno.toFixed(5);
}


function convertirAnguloARadianes(a) {
    let anguloEnRadianes = (a * Math.PI) / 180;
    return anguloEnRadianes;
}
