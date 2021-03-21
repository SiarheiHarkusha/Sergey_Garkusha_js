// Создать обьект описывающий прямоугольник (хранит координаты левой верхней и правой нижней точки), и написать следующие функции для работы с таким обьектом.

// let rectangle = {
//     leftTop: { x: 2, y: 10 },
//     rightBottom: { x: 15, y: 2 }
// };

// 1. Функция принимает обьект-прямоугольник и выводит информацию о нем (где какая точка)
// function putObj() {
//     console.log(`точка А (${rectangle.leftTop.x}, ${rectangle.leftTop.y});`);
//     console.log(`точка B (${rectangle.rightBottom.x}, ${rectangle.leftTop.y});`);
//     console.log(`точка C (${rectangle.rightBottom.x}, ${rectangle.rightBottom.y});`);
//     console.log(`точка D (${rectangle.leftTop.x}, ${rectangle.rightBottom.y});`);
// }

// 2. Функция принимает обьект-прямоугольник и возвращает его ширину.
// function putWidth() {
//     return Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x)
// };
// console.log(`ширина прямоугольника: ${putWidth()} см`);

// 3. Функция принимает обьект-прямоугольник и возвращает его высоту
// function putHeight() {
//     return Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y)
// };
// console.log(`длинна прямоугольника: ${putHeight()} см`);

// 4. Функция принимает обьект-прямоугольник и возвращает его площадь.

// function calculateArea() {
//     let width = Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x);
//     let height =  Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y);
//     return width * height
// }
// console .log(calculateArea())

// 5. Функция принимает обьект-прямоугольник и возвращает его периметр

// function calculatePerimeter() {
//     let width = Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x);
//     let height = Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y);
//     return (width + height) * 2
// }
// console.log(calculatePerimeter())

// 6. Функция изменения ширины прямоугольника. Она принимает обьект-прямоугольник и на сколько единиц изменить ширину.

// let newWidth = +prompt("Введи число");
// function changeWidth(newWidth) {
//     let width = Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x);
//     newWidth += width; 
//     return newWidth
// }
// console.log(changeWidth(newWidth))

// 7. Функция изменения высоты прямоугольника. Она принимает обьект-прямоугольник и на сколько единиц изменить высоту.
// let newHeight = +prompt("Введи число");
// function changeHeight(newHeight) {
//     let height = Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y);
//     newHeight += height; 
//     return newHeight
// }
// console.log(changeHeight(newHeight))

// 8.Функция изменения ширины и высоты прямоугольника. Она принимает обьект-прямоугольник и два значения - для изменения ширины и высоты.

// let newHeight = +prompt("Введи число к высоте");
// let newWidth = +prompt("Введи число к ширине");
// function changeRectangle(newHeight, newWidth) {
//     let height = Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y);
//     let width = Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x);
//     newHeight += height;
//     newWidth += width;

//     return (`${newHeight}, ${newWidth}`);
// }
// console.log(changeRectangle(newHeight, newWidth))


// 9. Функция смещения прямоугольника по оси Х. Она принимает обьект-прямоугольник и на сколько его сдвинуть.

// function displaceX(rectangle, newX) {
//     rectangle.leftTop.x = rectangle.leftTop.x + newX;
//     rectangle.rightBottom.x = rectangle.rightBottom.x + newX;
//     return rectangle
// }
// console.log (displaceX(rectangle, newX))

// 10. Функция смещения прямоугольника по оси Y. Она принимает обьект-прямоугольник и на сколько его сдвинуть.

// function displaceY(rectangle, newX) {
//         rectangle.leftTop.y = rectangle.leftTop.y + newX;
//         rectangle.rightBottom.y = rectangle.rightBottom.y + newX;
//         return rectangle
//     }
//     console.log (displaceY(rectangle, newX))

// 11. Функция смещения прямоугольника по оси Х и по оси Y. Она принимает обьект-прямоугольник и значения: сдвиг по оси Х и по оси Y.
// let newX = +prompt("На сколько сдвинуть по оси X");
// let newY = +prompt("На сколько сдвинуть по оси Y");

// let rectangle = {
//     leftTop: { x: 2, y: 10 },
//     rightBottom: { x: 15, y: 2 }
// };
// function displace(rectangle, newX, newY) {
//     rectangle.leftTop.x = rectangle.leftTop.x + newX;
//     rectangle.rightBottom.x = rectangle.rightBottom.x + newX;
//     rectangle.leftTop.y = rectangle.leftTop.y + newY;
//     rectangle.rightBottom.y = rectangle.rightBottom.y + newY;
//     return rectangle
// }
// console.log (displace(rectangle, newX, newY))

// 12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает обьект-прямоугольник и координаты точки.

// Я не понимаю, почему не работает!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let rectangle = {
//     leftTop: { x: 2, y: 10 },
//     rightBottom: { x: 15, y: 2 }
// };
// let newX = +prompt("По оси X");
// let newY = +prompt("По оси Y");
// function checkPoint(rectangle, newX, newY) {
//     if ( newX > rectangle.leftTop.x && newX < rectangle.rightBottom.x && newY > rectangle.leftTop.y && newY < rectangle.rightBottom.y) {
//         console.log("точка внутри")
//     } else {
//         console.log("точка снаружи")
//     }
// }
// checkPoint(rectangle, newX, newY);



