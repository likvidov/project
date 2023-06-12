let lang = prompt('Русский или Английский') ? 'ru' : 'en'
let arr;

if (lang == 'ru') {
  arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
  arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}

switch (lang) {
  case 'ru':
    arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    break;
  case 'en':
    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    break;
}

let dayofweek = {
  'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']
};

console.log(arr)
console.log(dayofweek[lang])

let namePerson = 'Артем'

namePerson === 'Артем' ? console.log('директор') : console.log('студент')
namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент')