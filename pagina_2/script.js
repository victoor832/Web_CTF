/* MOSTRAR INFORMACION */

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'flex';
    } else {
        content.style.display = 'none';
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