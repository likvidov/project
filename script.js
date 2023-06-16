'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;
let servicePrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
  title = prompt('Как называется ваш проект?', 'Проект');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые');

  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
}

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

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?', 'Админка');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
    }
    do {
      servicePrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(servicePrice));
    sum += +servicePrice;
  }
  return sum;
}

function getFullPrice(screenPrice, allServicePrices) {
  return +screenPrice + allServicePrices;
}

const getTitle = function (name) {
  return name.trim()[0].toUpperCase() + name.trim().slice(1).toLowerCase();
}

const getServicePercentPrices = function (fullPrice, rollback) {
  return fullPrice - (fullPrice * (rollback / 100))
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);

console.log('allServicePrices', allServicePrices);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens)
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);