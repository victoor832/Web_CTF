/* VALIDACION DE RESPUESTAS */

function showSection2() {
    var answer1 = document.getElementById('answer1').value;
    if(answer1 === 'Sophie Viger' || answer1 === 'Sophie viger' || answer1 === 'sophie Viger' || answer1 === 'sophie viger' ) {
        document.getElementById('section1').classList.add('hidden'); // Ocultar sección 1
        document.getElementById('section2').classList.remove('hidden'); // Mostrar sección 2
        document.getElementById('response1').textContent = '19';
        document.getElementById('response1').classList.remove('hidden');
    }  else {
        alert("Pista: Es directora Ejecutiva");
    }
}

function showSection3() {
    var answer2 = document.getElementById('answer2').value;
    if(answer2 === 'Joaquin' || answer2 === 'joaquin' || answer2 === 'Joaquín' || answer2 === 'joaquín') {
        document.getElementById('section2').classList.add('hidden'); // Ocultar sección 2
        document.getElementById('section3').classList.remove('hidden'); // Mostrar sección 3
        document.getElementById('response2').textContent = '06';
        document.getElementById('response2').classList.remove('hidden');
    }
    else {
        alert("Está presente en todas las piscinas y no es Staff");
    }
}

function showSection4() {
    var answer3 = document.getElementById('answer3').value;
    // Puedes validar answer3 si es necesario
    if(answer3 === '204') {
        window.location.href = "/pagina_2/pagina2.html";
    }
    else {
        alert("¿Has contado bien?");
    }
}
/* 
function showResponse4() {
    var answer4 = document.getElementById('answer4').value;
    if(answer4 === '28++;') {
        document.getElementById('section4').classList.add('hidden'); // Ocultar sección 4
        document.getElementById('response4').textContent = 'Lets goooooo (puedes comer)';
        document.getElementById('response4').classList.remove('hidden');

        

    } else {
        alert("El número no es mayor que 25");
    }
} */

/* TEMPORIZADOR RESET WEB */

var countdownElement = document.getElementById('countdown');
var totalSeconds = 180; // 3 minutes

var countdownInterval = setInterval(function() {
    totalSeconds--;
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    countdownElement.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        location.reload();
    }
}, 1000);

/* ELIMINAR INSPECCIONAR */

 /*   document.onkeydown = function(e) {
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
    };

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false); */ 


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