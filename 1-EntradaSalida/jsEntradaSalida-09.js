/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{let sueldo;

	sueldo = parseInt(document.getElementById("txtSueldo").value);
    
	let aumento; 
	aumento = sueldo * 0.10;

	let sueldofinal;

    sueldofinal = sueldo + aumento

	document.getElementById("txtResultado").value = sueldofinal;

	
	
}
