function mostrar() {
  let mes;
  mes = document.getElementById("txtMes").value;
  switch (mes) {
    case "Enero":
      alert("que comiences bien el año!!!");
      break; //se cierra con break//
    case "Marzo":
      alert("a clases!!!");
      break;
    case "Julio":
      alert("Se vienen las vacaciones!!!");
      break;
    case "Diciembre":
      alert("Felices fiestas!!!");
  }
}
