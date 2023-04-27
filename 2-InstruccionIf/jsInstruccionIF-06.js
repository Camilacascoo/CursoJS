function mostrar()
{ let Edad
	edad = parseInt(document.getElementById("txtEdad").value);
	if (edad >18) {
		alert("es mayor de edad");
		} else 
		{if (edad >=13 && edad <=17) {
		alert ("usted es adolescente") }
		else {
		alert ("usted es un niño")}
	}
}
