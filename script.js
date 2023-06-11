let title = "Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10;
let rollback = 50;
let fullPrice = 1000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

console.log("Стоимость верстки экранов " + (screenPrice) + " рублей");
console.log("Стоимость верстки экранов " + (screenPrice / 80).toFixed(2) + " долларов");
console.log("Стоимость верстки экранов " + (screenPrice / 2.24).toFixed(2) + " гривен");
console.log("Стоимость верстки экранов " + (screenPrice / 11.57).toFixed(2) + " юани");

console.log("Стоимость разработки сайта " + (fullPrice) + " рублей");
console.log("Стоимость разработки сайта " + (fullPrice / 80).toFixed(2) + " долларов");
console.log("Стоимость разработки сайта " + (fullPrice / 2.24).toFixed(2) + " гривен");
console.log("Стоимость разработки сайта " + (fullPrice / 11.57).toFixed(2) + " юани");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100))