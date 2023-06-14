let lang = prompt('Русский или Английский') ? 'ru' : 'en'
const dayofweek = {
  'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']
};

if (lang == 'ru') {
  dayofweek['ru'];
}
if (lang == 'en') {
  dayofweek['en'];
}

switch (lang) {
  case 'ru':
    dayofweek['ru'];
    break;
  case 'en':
    dayofweek['en'];
    break;
}

console.log(dayofweek[lang])

let namePerson = 'Артем'

namePerson === 'Артем' ? console.log('директор') : console.log('студент')
namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент')