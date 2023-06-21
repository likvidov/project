const books = document.querySelector('.books')
const booksList = document.querySelectorAll('.book')

//1
booksList[0].before(booksList[1])
booksList[0].after(booksList[4])
books.append(booksList[2])

//2
document.querySelector('body').style.backgroundImage = 'url(/image/you-dont-know-js.jpg)';

//3
booksList[4].querySelector('h2>a').textContent = 'Книга 3. this и Прототипы Объектов';

//4
document.querySelector('.adv').remove();

//5
const book2 = booksList[0].querySelectorAll('ul>li');
book2[1].after(book2[3], book2[6], book2[8], book2[4], book2[5], book2[7], book2[9])

const book5 = booksList[5].querySelectorAll('ul>li');
book5[1].after(book5[9], book5[3], book5[4]);
book5[8].before(book5[5])

//6 
const book6 = booksList[2].querySelectorAll('ul>li');
const chare8 = book6[0].cloneNode();
chare8.textContent = 'Глава 8: За пределами ES6';
book6[8].after(chare8);