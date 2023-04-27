function mostrar() {
  let estadocivil;
  let edad;
  estadocivil = document.getElementById("estadoCivil").value;
  edad = parseInt(document.getElementById("txtEdad").value);
  if (edad < 18 && estadocivil != "Soltero") {
    alert("Es muy pequeño para no ser soltero");
  }
}
