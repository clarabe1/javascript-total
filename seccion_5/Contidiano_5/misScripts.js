function mostrarPelicula(genero) {
    let elementoRecomendacion = document.getElementById("nuestraRecomendacion");

    let elementoEdad = document.getElementById("numeroEdad");
    let Edad = parseInt(elementoEdad.value);

    let pelicula = "";

    if (isNaN(Edad)) {
        alert("Digite su edad en el espacio solicitado");
        return;}


        switch (genero) {
            case 'Drama':
                if (Edad < 13) {
                    pelicula = "Casa blanca";
                } else if (Edad >= 13 && Edad <= 15) {
                    pelicula = "The Shawshank Redemption";
                } else if (Edad <= 16)
                    pelicula = "Taxi Driver";
                break;
            case "Comedia":
                if (Edad < 13) {
                    pelicula = "Back to the Future";
                } else if (Edad >= 13 && Edad <= 15) {
                    pelicula = "The Truman Show";
                } else if (Edad <= 16) {
                    pelicula = "The Wolf of Wall Street";
                }

                break;
            case "Musical":
                if (Edad < 13) {
                    pelicula = "La La Land";
                } else if (Edad >= 13 && Edad <= 15) {
                    pelicula = "Les Misérables";
                } else if (Edad <= 16) {
                    pelicula = "The Rocky Horror Picture Show";
                }


                break;
            case "Crimen":
                if (Edad < 13) {
                    pelicula = "No hay películas para esta edad.";
                } else if (Edad >= 13 && Edad <= 15) {
                    pelicula = "El Secreto de sus Ojos";
                } else if (Edad <= 16) {
                    pelicula = "The Godfather";
                }
        }

        elementoRecomendacion.textContent = pelicula;

    }

    function reiniciarSeleccion() {
        let elementoEdad = document.getElementById("numeroEdad");
        let elementoRecomendacion = document.getElementById("nuestraRecomendacion");

        elementoEdad.value = "";
        elementoRecomendacion.textContent = "";
    }