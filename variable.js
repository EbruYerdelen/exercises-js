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

//challengetwo
document.getElementById("submit1").onclick = function () {
  ourtext = document.getElementById("text1").value;
  document.getElementById("psubmit1").innerHTML = ourtext;
};

document.getElementById("length").onclick = function () {
  ourtext1 = document.getElementById("text1").value;
  ourtext1 = ourtext1.length;
  document.getElementById("pall").innerHTML = "String length: " + ourtext1;
};

document.getElementById("Uppercase").onclick = function () {
  ourtext2 = document.getElementById("text1").value;
  ourtext2 = ourtext2.toUpperCase();
  document.getElementById("pall").innerHTML = ourtext2;
};

document.getElementById("Lowercase").onclick = function () {
  ourtext3 = document.getElementById("text1").value;
  ourtext3 = ourtext2.toLowerCase();
  document.getElementById("pall").innerHTML = ourtext3;
};

document.getElementById("Clear").onclick = function () {
  document.getElementById("pall").remove();
  document.getElementById("psubmit1").remove();
};
