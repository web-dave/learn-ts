import { blockSize } from './globals';

export class Food {
  w = blockSize;
  h = blockSize;
  constructor(
    public x: number,
    public y: number,
    public food: string,
    private ctx: CanvasRenderingContext2D
  ) {}

  draw() {
    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = 'center';
    this.ctx.font = '40px Arial';
    this.ctx.fillText(this.food, this.x, this.y);
  }
}
