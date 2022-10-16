let liga = document.getElementById ( 'liga' );
let desliga = document.getElementById ( 'desliga' );
let lamp = document.getElementById ( 'lamp' );
let container = document.getElementById('container');

function desligado () {
    lamp.src = './media/desligada.png';
    container.style.backgroundColor = '#000';
    
}

function ligado () {
        lamp.src = './media/ligada.png';
        container.style.backgroundColor = '#fff';
}


desliga.addEventListener ( 'click', desligado );
liga.addEventListener ( 'click', ligado );
