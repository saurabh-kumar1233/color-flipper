const colors = ["red", "green", "rgba(128,200,150)"];
const btn = document.getElementById("color-button");
const colorSpan = document.querySelector("#heading span");

btn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
});
