let num = 266219;
let result = 1;
for (let i = 0; i < num.toString().length; i++) {
  result *= num.toString()[i];
}
console.log(result)
let result2 = result ** 3
console.log(result2)
console.log(result2.toString().slice(0, 2))