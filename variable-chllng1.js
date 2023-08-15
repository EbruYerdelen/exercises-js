console.log("Hello world");

let FirstName = "Ebru";
let LastName = "Ebru";
console.log("My name is", FirstName, LastName);

document.getElementById("p").innerHTML = "Hello paragraph ";

let a = 23;
let b = 46;

c = a + b;
d = a * b;
e = b / a;
f = a - b;
g = b % a;

console.log("Addition result", c);
console.log("Multplication result", d);
console.log("Division result", e);
console.log("Subtraction result", f);
console.log("Modulus result", g);

document.getElementById("mysubmit").onclick = function () {
  Input = document.getElementById("myinput").value;
  document.getElementById("myp").innerHTML = Input;
};

/*let pi = 3.14;
let radius;
let circumference;

radius = window.prompt("Yo enter ur radius here");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log("ur circumference is", circumference);*/
