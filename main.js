const get = function (line) {
  if (typeof line !== 'string') return 'Аргумент не является строкой';
  let str = line.trim();
  if (str.length > 30) return str.slice(0, 29) + '...';

  return str;
}

console.log(get(213))
console.log(get(' Lorem ipsum dolor sit amet. '));
console.log(get('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, temporibus?'));