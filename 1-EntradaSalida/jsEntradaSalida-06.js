/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{let numero1;
let numero2;
let suma;
numero1=document.getElementbyId("txtNumeroUno").value; 
numero1=parseInt(numero1)
numero2=document.getElementbyId("txtNumeroDos").value; 
numero2=parseInt(numero2)
suma= numero1 + numero2;
alert("Tu resultado es " + suma)
	




}

