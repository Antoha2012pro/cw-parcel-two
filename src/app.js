// import addd from "./js/add"; // Перший варіант. Можна зробити любу назву, та навіть іншу ніж з назвою функції. Може приймати одну функцію
// import {minus, multiply} from "./js/minus"; // Другий варіант. Синхронизовується з назвою function. Може приймати багато функцій у одному файлі
import *as calc from './js/calculator'; // Третій варіант. Передає функцію та через calc.(функція)(налаштування функції)    (calc це просто назва, вона може бути будь яка)

// import {add, minus, multiply, divide} from './js/calculator';

// console.log(add(2, 2));
// console.log(minus(2, 2));
// console.log(multiply(2, 2));
// console.log(divide(2, 2));

console.log(calc.add(2, 2));
