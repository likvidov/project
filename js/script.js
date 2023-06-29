'use strict';

const title = document.getElementById('title');
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const cmsBtn = document.getElementById('cms-open');
const hiddenCmsVariants = document.querySelector('.hidden-cms-variants');

const inputRange = document.querySelector('.rollback input[type=range]');
const inputRangeValue = document.querySelector('.rollback span.range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    this.addTitle();

    startBtn.addEventListener('click', this.start.bind(appData));
    resetBtn.addEventListener('click', this.reset.bind(appData));
    buttonPlus.addEventListener('click', this.addScreenBlock);
    inputRange.addEventListener('change', this.showRollback.bind(appData));
    cmsBtn.addEventListener('click', () => {
      hiddenCmsVariants.style.display = hiddenCmsVariants.style.display == 'none' ? 'flex' : 'none'
    })
    hiddenCmsVariants.addEventListener('change', () => {
      if (hiddenCmsVariants.children[0].children[0].value == 'other') {
        hiddenCmsVariants.children[1].style.display = 'flex';
      } else {
        hiddenCmsVariants.children[1].style.display = 'none';
      }
    })
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {

    this.addScreens()
    this.addServices();
    this.addPrice();
    this.showResult();
    this.changeDisabledInput();

    // this.getFullPrice();
    // this.getServicePercentPrices();

    // this.logger();
  },
  reset: function () {
    this.resetDate();
    this.showResult();
    this.changeDisabledInput();
    cmsBtn.checked = false;
    hiddenCmsVariants.style.display = 'none';
    hiddenCmsVariants.children[0].children[0].selectedIndex = 0;
  },
  resetDate: function () {
    this.screens = [];
    this.screenPrice = 0;
    this.screenCount = 0;
    this.adaptive = true;
    this.rollback = 10;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    screens.forEach((item, i) => {
      if (i > 0) {
        screens[i].remove();
      }
      item.children[0].children[0].selectedIndex = 0;
      item.children[1].children[0].value = '';
    })
  },
  changeDisabledInput: function () {
    screens.forEach(item => {
      item.children[0].children[0].disabled = !item.children[0].children[0].disabled;
      item.children[1].children[0].disabled = !item.children[1].children[0].disabled;
    })
    otherItemsNumber.forEach(item => {
      item.children[0].children[0].disabled = !item.children[0].children[0].disabled;
    })
    otherItemsPercent.forEach(item => {
      item.children[0].children[0].disabled = !item.children[0].children[0].disabled;
    })
    buttonPlus.style.display = buttonPlus.style.display == '' ? 'none' : '';
    startBtn.style.display = startBtn.style.display == '' ? 'none' : '';
    resetBtn.style.display = resetBtn.style.display == '' ? 'none' : '';
  },
  showRollback: function () {
    inputRangeValue.textContent = +inputRange.value + "%";
    this.rollback = +inputRange.value;
    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))
    totalCountRollback.value = this.servicePercentPrice;
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.screenCount;
  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');
    this.screens = [];

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      if (select.value != 0 && input.value != '' && !isNaN(+input.value)) {
        this.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
          count: +input.value
        })
      } else {
        alert('Выберите экран и введите количество');
      }
    })
  },
  addServices: function () {
    otherItemsPercent.forEach(item => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value
      }
    })
  },
  addScreenBlock: function () {
    screens = document.querySelectorAll('.screen');
    const cloneScreen = screens[0].cloneNode(true);
    cloneScreen.children[1].children[0].value = '';
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrice: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price
      this.screenCount += +screen.count
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key]
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))

    if (hiddenCmsVariants.children[0].children[0].value == '50') {
      this.fullPrice += this.fullPrice / 2;
    }
  },
  getServicePercentPrices: function () {
    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))
  },
  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
    console.log(this.services);
  },
}

appData.init();