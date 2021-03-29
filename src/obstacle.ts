import { blockSize } from './globals';

export class Obstacle {
  img = ['🪑', '🛋️', '🛏️', '🧱', '💣'];
  collission = '💥';
  h = blockSize;
  w = blockSize;
  color = 'brown';
  icon = '';
  constructor(
    public x: number,
    public y: number,
    private ctx: CanvasRenderingContext2D
  ) {
    this.icon = this.img[Math.round(Math.random() * 4)];
  }
  draw() {
    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = 'center';
    this.ctx.font = '40px Arial';
    this.ctx.fillText(this.icon, this.x, this.y);
  }
}
