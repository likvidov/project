let arr = ['1312', '3123', '2434', '4231', '5435', '4324', '8432'];

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item)
  }
})

for (let i = 1; i <= 100; i++) {
  let count = 0;
  if (i === 1) continue;
  for (let t = 2; t <= i; t++) {
    if (i % t == 0) {
      count++;
    }
  }
  if (count <= 1) console.log(i + ' = делители этого числа: 1 и ' + i);
}