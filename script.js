'use strict';

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

console.log("Стоимость верстки экранов " + (screenPrice.toFixed(2)) + " рублей");

console.log("Стоимость разработки сайта " + (fullPrice.toFixed(2)) + " рублей");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100));

title = prompt('Как называется ваш проект?');
screens = prompt('Какие типы экранов нужно разработать?(пример: "Простые, Сложные, Интерактивные")');
screenPrice = prompt('Сколько будет стоить данная работа?(пример: 12000)');
adaptive = Boolean(prompt('Нужен ли адаптив на сайте?'));
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice)

if (fullPrice >= 30000) {
  console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log('Даем скидку в 5%');
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log('Скидка не предусмотрена');
} else {
  console.log('Что то пошло не так');
}