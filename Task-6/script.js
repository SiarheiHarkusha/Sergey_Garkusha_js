//  1 Создайте массив styles с элементами «Джаз» и «Блюз».
//  2 Добавьте «Рок-н-ролл» в конец.
//  3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//  4 Удалите первый элемент массива и покажите его.
//  5 Вставьте «Рэп» и «Регги» в начало массива.
//  /////// 1
// let styles =  ['jazz', 'blues'];

// /////// 2
// styles.push('rock-and-roll');
// console.log(styles)

// //////// 3
// styles[Math.floor(styles.length / 2)] = 'classic';
// console.log(styles)

// /////// 4
// alert(styles.shift())

// ////// 5
// styles.unshift('rap', 'raggy')
// console.log(styles)



// let student = [   { name: ‘AAA’, enrollment: 100 },   { name: ‘BBB’, enrollment: 50 },   { name: ‘CCC’, enrollment: 50 } ];  
// Output: {   ’50': [     { name: ‘BBB’, enrollment: 50 },     { name: ‘CCC’, enrollment: 50 }   ],   ‘100’: [ { name: ‘AAA’, enrollment: 100 } ] }
// Нудно написать функцию которая преобразуем переменную student в переменную output используя reduce

// let student = [
//     {name: "AAA", enrollment: 50},
//     {name: "BBB", enrollment: 50},
//     {name: "BBB", enrollment: 100},
//     {name: "CCC", enrollment: 50},
//     {name: "AAA", enrollment: 100},
//     {name: "AAA", enrollment: 150},
//     {name: "BBB", enrollment: 150},
//     ];

// function createOutput (arr){
//     return arr.reduce ((accum, item) => {
//         if (accum[item.enrollment]) {
//             accum[item.enrollment].push(item);
//         }
//         else {
//             accum[item.enrollment] = [item];
//         }
//         return accum;
//     }, {})    
// }
// console.log(createOutput(student))


//  Создать массив "список покупок". Каждый элемент массива явл. обьектом, который содержит название продукта, необходимое колличество и цену.
// Написать функцию которая отсортирует список покупок по:
// 1. По цене

// let shopList = [{name: "sausage", amount: 5, price: 2},
//                 {name: "bread", amount: 1, price: 1},
//                 {name: "butter", amount: 2, price: 3}]
// console.log(shopList)
// shopList.sort(function (a, b) {
//     if (a.price > b.price) {
//         return 1;
//     }
//     if  (a.price < b.price) {
//         return -1;
//     }
//     return 0;
// })
// console.log(shopList)


// 2. По названию

// shopList.sort(function (a, b) {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if  (a.name < b.name) {
//         return -1;
//     }
//     return 0;
// })
// console.log(shopList)