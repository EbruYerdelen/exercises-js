let myname = document.getElementById("myDiv");
myname.addEventListener("click", myRotate);

function myRotate() {
  myname.style.transform = "rotate(360deg)";
  myname.style.transition = "transform 0.4s ";
}

window.addEventListener("keydown", (event) => console.log(event.key));
