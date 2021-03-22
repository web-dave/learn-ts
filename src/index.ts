// Write TypeScript code!
import { Player } from './player';

const canvas: HTMLCanvasElement = document.querySelector('canvas');

const height = window.innerHeight;
const width = window.innerWidth;
canvas.height = height;
canvas.width = width;

const ctx = canvas.getContext('2d');
const player = new Player(
  20,
  20,
  window.innerHeight / 2,
  window.innerWidth / 2,
  ctx
);
player.draw();
setInterval(() => {
  ctx.fillStyle = '#1d1d1d';
  ctx.fillRect(0, 0, width, height);
  player.run(1);
}, 1000);
