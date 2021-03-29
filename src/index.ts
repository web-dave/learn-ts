import { Food } from './food';
import { canvasHeight, canvasWidth, foodList, saveCanvasSize } from './globals';
import { Obstacle } from './obstacle';
import { Player } from './player';

// Import stylesheets
const blockSize = 50;
let painCounter = 0;
let itemCounter = 0;
let TimeStarted = false;
let stop = false;
let intervalCounter = 42;
let gameInterval;
const display = document.querySelector('.display');
const timer = document.querySelector('h5');

const height = innerHeight - 150;
const width = innerWidth - 5;
const bloxY = parseInt((height / blockSize).toFixed(0), 10);
const bloxX = parseInt((width / blockSize).toFixed(0), 10);

const canvas = document.querySelector('canvas');
saveCanvasSize(bloxY * blockSize, bloxX * blockSize);
canvas.height = bloxY * blockSize;
canvas.width = bloxX * blockSize;
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

for (let i = 0; i < bloxX + bloxY; i++) {
  obstacles.push(
    new Obstacle(
      parseInt((Math.random() * bloxX).toFixed()) * blockSize + blockSize / 2,
      parseInt((Math.random() * bloxY).toFixed()) * blockSize + blockSize / 2,
      ctx
    )
  );
}
document.body.addEventListener('keydown', (event: KeyboardEvent) => {
  if (!TimeStarted) {
    TimeStarted = true;
    gameInterval = setInterval(() => {
      intervalCounter--;
      timer.innerHTML = 'Time: ' + intervalCounter;
      if (intervalCounter <= 0) {
        stop = true;
        clearInterval(gameInterval);
      }
    }, 300);
  }
  if (stop) {
    player.run(0, 0);
    return;
  }
  switch (event.key) {
    case 'ArrowLeft':
      //left
      player.run(-10, 0);
      break;
    case 'ArrowUp':
      //top
      player.run(0, -10);
      break;
    case 'ArrowRight':
      //right
      player.run(10, 0);
      break;
    case 'ArrowDown':
      //down
      player.run(0, 10);
      break;
  }
});
document.body.addEventListener('keyup', (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowLeft':
      //left
      player.run(0, 0);
      break;
    case 'ArrowUp':
      //top
      player.run(0, 0);
      break;
    case 'ArrowRight':
      //right
      player.run(0, 0);
      break;
    case 'ArrowDown':
      //down
      player.run(0, 0);
      break;
  }
});

const draw = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  for (let i = 0; i < bloxY; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * blockSize);
    ctx.lineTo(canvasWidth, i * blockSize);
    ctx.stroke();
  }
  for (let i = 0; i < bloxX; i++) {
    ctx.beginPath();
    ctx.moveTo(i * blockSize, 0);
    ctx.lineTo(i * blockSize, canvasHeight);
    ctx.stroke();
  }
  for (let o of obstacles) {
    let icon = o.icon;
    if (player.collide(o)) {
      icon = o.collission;
      if (o.icon !== icon) {
        painCounter++;
      }
    }
    o.icon = icon;
    o.draw();
  }
  foods.forEach((f, i) => {
    if (player.collect(f)) {
      itemCounter++;
      foods.splice(i, 1);
    } else {
      f.draw();
    }
  });

  player.draw();
  displayResults(painCounter, itemCounter, stop);
};

function displayResults(p: number, i: number, done: boolean) {
  display.innerHTML = `
    ${done ? 'Finale Result:' : ''}
      Collitions: ${p} 
      Items: ${i}
    `;
}

setInterval(() => draw(), 50);
