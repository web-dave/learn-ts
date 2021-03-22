// Write TypeScript code!
import { Item } from './item';
import { Direction, Player } from './player';

const canvas: HTMLCanvasElement = document.querySelector('canvas');

let movement: Direction = 0;

const height = window.innerHeight;
const width = window.innerWidth;
canvas.height = height;
canvas.width = width;

const ctx = canvas.getContext('2d');
const player: Player = new Player(
  20,
  20,
  window.innerWidth / 2,
  window.innerHeight / 2,
  ctx
);
player.draw();

document.body.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.code === 'ArrowLeft') {
    movement = -1;
  } else if (event.code === 'ArrowRight') {
    movement = 1;
  }
  //
});
document.body.addEventListener('keyup', (event: KeyboardEvent) => {
  movement = 0;
});

const itms: Item[] = [];
for (let i = 0; i < 10; i++) {
  itms.push(
    new Item(
      40,
      40,
      Math.random() * window.innerWidth - 40,
      Math.random() * window.innerHeight - 40,
      ctx,
      'hotpink'
    )
  );
}

setInterval(() => {
  ctx.fillStyle = '#1d1d1d';
  ctx.fillRect(0, 0, width, height);
  for (let itm of itms) {
    itm.draw();
  }
  player.walk(movement);
}, 1000);
