/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento() {
	let importe;
	let aumento;
	let importefinal;

	importe = parseInt(document.getElementById("txtImporte").value);

	aumento = importe * 0.25;


	importefinal = importe - aumento

	document.getElementById("txtResultado").value = importefinal;



}
