const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
let size = 20;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;
canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});
const increase = document.getElementById("increase");
increase.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  sizeEl.innerText = size;
});
const decrease = document.getElementById("decrease");
decrease.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  sizeEl.innerText = size;
});
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.lineWidth = size;
}
colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle(x, y);
//   requestAnimationFrame(draw);
// }
// draw();
