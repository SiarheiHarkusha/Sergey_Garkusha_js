// Создать HTML-страницу для генерации случайных чисел. На странице должна быть кнопка, при нажатии на которую случайное  целое число от 0 д 100 выводится в div.
let cifra = createNumber;
let div = document.createElement('div');
document.body.append(div);
div.classList.add('react'); 

let board = document.createElement('div');
document.body.append(board);
board.classList.add('jquary');

let button = document.createElement('button');
document.body.append(button);
button.innerHTML = 'ADD';
button.id = 'knopka';

div.append(board)
div.append(button)
document.querySelector('button').onclick = cifra;

function createNumber() {
    board.innerHTML = Math.trunc(Math.random() * 100);
}