function mensajeOculto() {
    let elementoFruta = document.getElementById("nombreFruta");
    let fruta = elementoFruta.value;

    let elementoRespuesta = document.getElementById("respuesta");

    switch (fruta) {
        case "Manzana":
            elementoRespuesta.textContent = "$15";
            break;
        case "Naranja":
            elementoRespuesta.textContent = "$20";
            break;
        case "Banana":
            elementoRespuesta.textContent = "$25";
            break;
        default:
            elementoRespuesta.textContent = "Fruta no encontrada";
    }
    alert("El precio de la fruta " + fruta + " es: " + elementoRespuesta.textContent);
}
