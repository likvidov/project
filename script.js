'use strict';

let title = prompt('Как называется ваш проект?', 'Проект');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '10000');
let adaptive = confirm('Нужен ли адаптив на сайте?', true);
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Админка');
let servicePrice1 = +prompt('Сколько это будет стоить?', '5000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'Какой-нибудь');
let servicePrice2 = +prompt('Сколько это будет стоить?', '2500');
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))
let allServicePrices;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable)
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%';
  } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%';
  } else if (price >= 0 && price < 15000) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что то пошло не так';
  }
}

const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2;
}

function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

const getTitle = function (name) {
  return name.trim()[0].toUpperCase() + name.trim().slice(1).toLowerCase();
}

const getServicePercentPrices = function (fullPrice, rollback) {
  return fullPrice - (fullPrice * (rollback / 100))
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens)
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);