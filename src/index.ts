import { Food } from './food';
import { canvasHeight, canvasWidth, foodList, saveCanvasSize } from './globals';
import { Obstacle } from './obstacle';
import { Player } from './player';

// Import stylesheets
const blockSize = 50;
const display = document.querySelector('canvas');

const height = innerHeight - 150;
const width = innerWidth - 5;
const bloxY = parseInt((width / blockSize).toFixed(0), 10);
const bloxX = parseInt((height / blockSize).toFixed(0), 10);

const canvas = document.querySelector('canvas');
saveCanvasSize(bloxX * blockSize, bloxY * blockSize);
canvas.height = bloxX * blockSize;
canvas.width = bloxY * blockSize;
const ctx = canvas.getContext('2d');

const player = new Player(width / 2, height / 2, ctx);
const obstacles: Obstacle[] = [];
const foods: Food[] = [];

for (let f of foodList) {
  foods.push(
    new Food(
      parseInt((Math.random() * bloxX).toFixed()) * blockSize + blockSize / 2,
      parseInt((Math.random() * bloxY).toFixed()) * blockSize + blockSize / 2,
      f,
      ctx
    )
  );
}
for (let i = 0; i < 20; i++) {
  obstacles.push(
    new Obstacle(
      parseInt((Math.random() * bloxX).toFixed()) * blockSize,
      parseInt((Math.random() * bloxY).toFixed()) * blockSize,
      ctx
    )
  );
}

document.body.addEventListener('keydown', (event: KeyboardEvent) => {
  switch (event.keyCode) {
    case 37:
      //left
      player.run(-10, 0);
      break;
    case 38:
      //top
      player.run(0, -10);
      break;
    case 39:
      //right
      player.run(10, 0);
      break;
    case 40:
      //down
      player.run(0, 10);
      break;
  }
});
document.body.addEventListener('keyup', (event: KeyboardEvent) => {
  switch (event.keyCode) {
    case 37:
      //left
      player.run(0, 0);
      break;
    case 38:
      //top
      player.run(0, 0);
      break;
    case 39:
      //right
      player.run(0, 0);
      break;
    case 40:
      //down
      player.run(0, 0);
      break;
  }
});

const draw = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  for (let o of obstacles) {
    player.collide(o);
    o.draw();
  }
  for (let [i, f] of foods.entries()) {
    if (player.collect(f)) {
      foods.splice(i, 1);
    } else {
      f.draw();
    }
  }
  for (let i = 0; i < bloxX; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * blockSize);
    ctx.lineTo(canvasWidth, i * blockSize);
    ctx.stroke();
  }
  for (let i = 0; i < bloxY; i++) {
    ctx.beginPath();
    ctx.moveTo(i * blockSize, 0);
    ctx.lineTo(i * blockSize, canvasHeight);
    ctx.stroke();
  }
  player.draw();
};

// draw();

setInterval(() => draw(), 50);
