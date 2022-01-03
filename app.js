const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const divs = document.querySelectorAll(".color");
const code = document.querySelectorAll(".code");
const button = document.querySelector("button");
const body = document.querySelector("body");
const wrapper = document.querySelectorAll(".wrapper");
const icon = document.querySelectorAll("i");
let hex;
let random;
const arr = [];

window.onload = generate;
button.onclick = generate;
window.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    generate();
  }
});

function generate() {
  for (let i = 0; i < divs.length; i++) {
    hex = "#";
    for (let i = 0; i < 6; i++) {
      random = Math.floor(Math.random() * values.length - 1) + 1;
      hex = hex.concat(values[random]);
     
    }
    divs[i].style.backgroundColor = hex;
    code[i].textContent = hex;
    arr.push(hex)
  }
}
for (let i = 0; i < wrapper.length; i++) {
  wrapper[i].addEventListener("mouseover", () => {
    icon[i].classList.add("show");
  });
  wrapper[i].addEventListener("mouseout", () => {
    icon[i].classList.remove("show");
  });
}

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", () => {
    navigator.clipboard.writeText(code[i].textContent);
  });
}
window.addEventListener("keypress", (e) => {
  if (e.code === "KeyC") {
    
copyToClipboard(arr.toString())
  }
});

function copyToClipboard(text) {
var type="text/plain"
var blob=new Blob([text],{type})
var data=[new ClipboardItem({[type]:blob})]
navigator.clipboard.write(data).then(
function(){
  console.log("success")
},
function(){
  console.log("failure")
}
);
}
