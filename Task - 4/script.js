//Создать обьект, описывающий прямоугольник (хранит координаты левой верхней и и правой нижней точек), и написать следующие функции для работы с таким обьектом.

//1.Функция принимает обьект-прямоугольник и выводит информацию о нем (где какая точка расположена).
// let rectangle = {leftTop:{x: 2, y: 10,}, rightBottom:{x: 12, y: 3}}; 
// function installPoint() {
//     console.log(`Точка А имеет координаты - (${rectangle.leftTop.x};${rectangle.leftTop.y})`);
//     console.log(`Точка B имеет координаты - (${rectangle.rightBottom.x};${rectangle.leftTop.y})`);
//     console.log(`Точка C имеет координаты - (${rectangle.rightBottom.x};${rectangle.rightBottom.y})`);
//     console.log(`Точка D имеет координаты - (${rectangle.leftTop.x};${rectangle.rightBottom.y})`);
// }
// installPoint();

// 2.Функция принимает обьект-прямоугольник и возвращает его ширину.
// let rectangle = {leftTop:{x: 2, y: 10,}, rightBottom:{x: 12, y: 3}};
// function calculateWidth() {
//     return Math.abs(rectangle.leftTop.x - rectangle.rightBottom.x);    
// }
// console.log(`Ширина прямоугольника равна: ${calculateWidth()} см`)

// 3.Функция принимает обьект-прямоугольник и возвращает его высоту.
// let rectangle = {leftTop:{x: 2, y: 10,}, rightBottom:{x: 12, y: 3}};
// function calculateHeight() {
//     return Math.abs(rectangle.leftTop.y - rectangle.rightBottom.y);    
// }
// console.log(`Высота прямоугольника равна: ${calculateHeight()} см`)

//******************** ЗАДАНИЕ -2
// Создать обьект, описыващий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим обьектом. 

// 1.Функция для вывода на экран информации об автомобиле.
// let automobile = {
//     Country: "Germany",
//     Mark: "Mercedes-Benz",
//     Model: "s500",
//     Year: 2020,
//     maxSpeed: 250;
// };
// function infoAuto() {
//     alert(` Country: ${automobile.Country};\n Mark: ${automobile.Mark};\n Model: ${automobile.Model};\n Year: ${automobile.Year};\n maxSpeed: ${automobile.maxSpeed} .`)
    
// }
// infoAuto();

// ***********************ЗАДАНИЕ - 3
// Создать обьект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим обьектом.

// 1.Функция сложения 2-х обьектов-дробей.
// let fraction = {
//     fra1:{ 
//     numerator: 1,
//     denominator: 3,
// },
//     fra2:{
//     numerator: 2,
//     denominator: 5,
// }
// };
// function sumFraction() {
//     let sumNumerator = (fraction.fra1.numerator * fraction.fra2.denominator) + (fraction.fra2.numerator * fraction.fra1.denominator);
//     let sumDenominator = (fraction.fra1.denominator * fraction.fra2.denominator);
//     console.log (`${sumNumerator}/${sumDenominator}`);
// }
// sumFraction();
