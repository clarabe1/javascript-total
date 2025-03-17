function calcular() {
    let elementoNumero1 = document.getElementById("numero1");
    let elementoNumero2 = document.getElementById("numero2");
    let elementoRespuesta = document.getElementById("respuesta");

    let numero1 = elementoNumero1.value;
    let numero2 = elementoNumero2.value;

    let comparacion1 = numero1 >= numero2;
    elementoRespuesta.textContent = comparacion1;

    let comparacion2 = numero2 <= numero1;
    elementoRespuesta.textContent = comparacion2;


}