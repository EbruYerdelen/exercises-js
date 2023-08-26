/*let numbers = [23, 49, 567, 98757757];

squares = numbers.forEach((element) => {
  return Math.pow(element, 2);
});
console.log(squares);

squares.forEach((element) => console.log(element % 6));*/

let numbers = [23, 49, 567, 98757757];

squares = numbers.map((element) => {
  return Math.pow(element, 2);
});
console.log(squares);

squares.forEach((element) => console.log(element % 6));
