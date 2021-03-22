import { Item } from './item';

export type Direction = 1 | 0 | -1;

export class Player extends Item {
  private step = 150;
  constructor(
    height: number,
    width: number,
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D
  ) {
    super(height, width, x, y, ctx, 'yellow');
    this.step = width;
  }
  walk(direction: Direction) {
    this.x += direction * this.step;
    this.draw();
  }
}
