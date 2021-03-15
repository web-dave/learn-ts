import { blockSize } from './globals';

export class Obstacle {
  h = blockSize;
  w = blockSize;
  color = 'brown';
  constructor(
    public x: number,
    public y: number,
    private ctx: CanvasRenderingContext2D
  ) {}
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}
