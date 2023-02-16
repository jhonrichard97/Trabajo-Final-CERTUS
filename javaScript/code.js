// Función para el modal de promoción
function primeraFuncion() {
    const modalEntrada = new bootstrap.Modal("#modalEntrada");
    modalEntrada.show();
    /*const modalEntrada2 = new bootstrap.Modal("#galleta");
    modalEntrada2.show();*/
}

function myFunctionCookie() {
    var x = document.getElementById("aceptarCookie");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}