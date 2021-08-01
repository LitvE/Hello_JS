// Комментарии:
// - однострочный комментарий
/* комментарий блока кода*/

// alert("Hello JavaScript");

// console.log("Hello JS!!!");

let x;
let a, b;

x = 5;
// console.log('x=', x);
a = 'world';
b = 0.77;
console.log(a, b);

let userName;
userName = 'Vasya';
console.log(userName);

let userAge = 100;
console.log(userAge);

let name = 'Ivan', age;
age = 20;
console.log(name, age);

const COLOR_CAR = 'red';
console.log(COLOR_CAR);

x = 100;
console.log(x);

x = b;
console.log(x);

let x2 = 1000;
x = x2;
console.log(x);

console.log('x =', x, 'x2 =', x2);

// typeof(x);
// console.log(typeof(x));

/* Здесь будет ошибка!!
COLOR_CAR = 'blue';
console.log(COLOR_CAR);
*/

const X_CONST = 200;
console.log('x (before) =', x);
x = X_CONST;
console.log('x (after) =', x);

/*
Типы данных:
- числа;
- строки;
- булевые значения: true, false, 0, 1;
- массивы;
- объекты;
*/

let a1, a2;
a1 = 100;
a2 = 200;
let res;
res = a1 + a2;
console.log(res);
res = a1 - a2;
console.log(res);
res = a1 * a2;
console.log(res);
res = a1 / a2;
console.log(res);


console.log('-----------------');
res = a1 + 4;
console.log(res);
res = a1 - 1.2;
console.log(res);
res = a1 * 0.5;
console.log(res);
res = a1 / 1000;
console.log(res);

console.log('-----------------');
console.log(x);
// x = x + 1; тоже самое, что и ниже
// console.log(x)
x++; // операция инкрементации
console.log(x)
// x = x - 1; тоже самое, что и ниже
x--; // операция декрементацииж\
console.log(x)

console.log('-----------------');
let res3;
// res3 = x++;
// console.log(res3);

res3 = ++x;
console.log(res3);

console.log('-----------------');
let valueKg, valueGr;
// valueKg = 50;
const DEFUALT_VALUE = 1;
valueKg = prompt('Enter the weight in kg', DEFUALT_VALUE);
valueGr = valueKg * 1000;
console.log('result is ', valueGr, ' gr');

console.log('-----------------');


