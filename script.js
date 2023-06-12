const title = "Project";
const screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10;
let rollback = 50;
let fullPrice = 1000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

console.log("Стоимость верстки экранов " + (screenPrice.toFixed(2)) + " рублей");

console.log("Стоимость разработки сайта " + (fullPrice.toFixed(2)) + " рублей");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100))