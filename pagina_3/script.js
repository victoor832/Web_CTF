/* SLIDESHOW */ 
 
 // Inicializamos las variables de los elementos
    const bankElement = document.getElementById('bank');
    const militaryElement = document.getElementById('military');

    // Función para alternar la visibilidad
    function toggleVisibility() {
        if (bankElement.style.display === 'none') {
            bankElement.style.display = 'block';
            militaryElement.style.display = 'none';
        } else {
            bankElement.style.display = 'none';
            militaryElement.style.display = 'block';
        }
    }

    // Mostrar el elemento 'bank' inicialmente
    bankElement.style.display = 'block';

    // Alternar cada 40 segundos (40000 milisegundos)
    setInterval(toggleVisibility, 15000);

/* INPUT VALIDATION */

function validation() {
    // Obtiene el valor del input
    const pin = document.getElementById("answer").value;

    // Comprueba si el PIN es correcto
    if (pin === "162930") {
        window.location.href = "../final/index.html";
        alert("PIN correcto");
    } else {
        alert("PIN incorrecto");
    }
}