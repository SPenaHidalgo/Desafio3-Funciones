const box1 = document.getElementById("caja1");

window.addEventListener("keydown", function (pintar) {
 if (pintar.key === "a") {
  box1.style.backgroundColor = "pink";
 } else if (pintar.key === "s") {
  box1.style.backgroundColor = "orange";
 } else if (pintar.key === "d") {
  box1.style.backgroundColor = "blue";
 } else if (pintar.key === "q") {
  createNewDiv("purple");
 } else if (pintar.key === "w") {
  createNewDiv("gray");
 } else if (pintar.key === "e") {
  createNewDiv("brown");
 } else {
  box1.style.backgroundColor = "transparent";
 }
});

function createNewDiv(color) {
 const newDiv = document.createElement("div");
 newDiv.style.width = "200px";
 newDiv.style.height = "200px";
 newDiv.style.backgroundColor = color;
 newDiv.style.border = "solid";
 newDiv.style.display= "inline-flex"
 newDiv.style.justifyContent= "space-evenly"
 newDiv.style.margin= "1rem"
 newDiv.style.borderRadius= "10%"

 document.body.appendChild(newDiv);
}
