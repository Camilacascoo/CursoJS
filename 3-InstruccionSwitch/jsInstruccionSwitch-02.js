function mostrar() {
  let mes;
  mes = document.getElementById("txtMes").value;
  switch (mes) {
    case "Enero":
    case "febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
      alert("falta para invierno");
      break;
    case "Julio":
    case "Agosto":
      alert("Ya pasamos el frio, ahora calor!!!");
  }
}
