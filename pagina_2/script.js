/* MOSTRAR INFORMACION */

function toggleContent(contentId) {
    // Ocultar todos los contenidos
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostrar el contenido seleccionado
    var selectedContent = document.getElementById(contentId);
    if (selectedContent.style.display === 'none' || selectedContent.style.display === '') {
        selectedContent.style.display = 'block';
    } else {
        selectedContent.style.display = 'none';
    }
}

/* VALIDAR RESPUESTA */


function checkAnswer() {
    var answer = document.getElementById('answer').value;
    var nextButton = document.getElementById('nextButton');
    if (answer.toLowerCase() === 'cookingcookies4rookies') { // Replace 'correcta' with the correct answer
        nextButton.classList.remove('hidden');
    } else {
        alert('Respuesta incorrecta. Inténtalo de nuevo.');
    }
}

/* BOTON SIGUIENTE REDIRIGE A LA PAGINA 3 */

document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = '../pagina_3/pagina3.html'; // Cambia 'pagina3.html' por la URL a la que deseas redirigir
});
