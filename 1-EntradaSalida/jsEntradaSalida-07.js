/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    let numero1;
    let numero2;
    let suma;
    numero1 = document.getElementById("txtNumeroUno").value;
    numero1 = parseInt(numero1)
    numero2 = document.getElementById("txtNumeroDos").value;
    numero2 = parseInt(numero2)
    suma = numero1 + numero2;
    alert("Tu resultado es " + suma)

}

function restar() {
    let numero1;
    let numero2;
    let resta;
    numero1 = document.getElementById("txtNumeroUno").value;
    numero1 = parseInt(numero1)
    numero2 = document.getElementById("txtNumeroDos").value;
    numero2 = parseInt(numero2)
    resta = numero1 - numero2;
    alert("Tu resultado es " + resta)

}

function multiplicar() {
    let numero1;
    let numero2;
    let multiplica;
    numero1 = document.getElementById("txtNumeroUno").value;
    numero1 = parseInt(numero1)
    numero2 = document.getElementById("txtNumeroDos").value;
    numero2 = parseInt(numero2)
    multiplica = numero1 * numero2;
    alert("Tu resultado es " + multiplica)

}

function dividir() {
    let numero1;
    let numero2;
    let dividir;
    numero1 = document.getElementById("txtNumeroUno").value;
    numero1 = parseInt(numero1)
    numero2 = document.getElementById("txtNumeroDos").value;
    numero2 = parseInt(numero2)
    dividi = numero1 / numero2;
    alert("Tu resultado es " + dividis)

}
