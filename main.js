let time = document.querySelectorAll('.time');
const dayOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const changeHours = (time) => {
  if (time == 1 || time == 21)
    return 'час';
  if ((time >= 2 || time <= 4) || time == 22 || time == 23)
    return 'часа';
  if (time == 0 || (time >= 5 || time <= 20))
    return 'часов';
}

const addZero = (value) => {
  if (String(value).length > 1)
    return value;
  return '0' + value
}

setInterval(() => {
  const date = new Date();
  time[0].textContent = 'Сегодня ' + dayOfWeek[date.getDay() - 1] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' ' + changeHours(date.getHours()) + ' ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' секунды';
  time[1].textContent = addZero(date.getDate()) + '.' + (addZero(date.getMonth() + 1)) + '.' + date.getFullYear() + ' - ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
}, 1000)