function mensajeOculto(fruta) {
    let precio;

    switch (fruta) {
        case "Manzana":
            precio = 15;
            break;
        case "Naranja":
            precio = 20;
            break;
        case "Banana":
            precio = 25;
            break;
        default:
            alert("No se encuentra disponible esta fruta");
            return;
    }

    alert("El precio de la " + fruta + " es: $" + precio);
}

function enviar() {
    let fruta = document.getElementById("nombreFruta").value;
    mensajeOculto(fruta);
}