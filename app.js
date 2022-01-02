let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let divs = document.querySelectorAll(".color");
let code = document.querySelectorAll(".code");
let hex;
let random;
let newWord;
let button = document.querySelector("button");
let body = document.querySelector("body");
let icon = document.querySelectorAll("i");

window.onload = generate;
window.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    generate();
  }
});
button.onclick = generate;
function generate() {
  for (let i = 0; i < divs.length; i++) {
    hex = "#";
    for (let i = 0; i < 6; i++) {
      random = Math.floor(Math.random() * values.length - 1) + 1;
      hex = hex.concat(values[random]);
    }
    divs[i].style.backgroundColor = hex;
    code[i].textContent = hex;
  }
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("mouseover", () => {
    icon[i].classList.add("show");
  });
  divs[i].addEventListener("mouseleave", () => {
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
  }
});

async function writeClipImg() {
  try {
  } catch {}
}
