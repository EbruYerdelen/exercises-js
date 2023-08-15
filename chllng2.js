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
