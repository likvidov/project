const dayOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const date = new Date();

dayOfWeek.forEach((item, i) => {
  if (i == date.getDay() - 1) {
    console.log(`%c${item}`, 'font-weight: bold')
  } else if (item == 'Суббота' || item == 'Воскресенье') {
    console.log(`%c${item}`, 'font-style: italic;')
  } else {
    console.log(item)
  }
})