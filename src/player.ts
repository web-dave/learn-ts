import { Food } from './food';
import { blockSize, canvasHeight, canvasWidth } from './globals';
import { Obstacle } from './obstacle';

// Working Title:
// day tomorrow, the way to the fridge
// x => horry
// y => verty

export class Player {
  wayX = 0;
  wayY = 0;
  w = blockSize;
  h = blockSize;
  constructor(
    public x: number,
    public y: number,
    private ctx: CanvasRenderingContext2D
  ) {}
  run(x: number, y: number) {
    this.wayX = x;
    this.wayY = y;
  }

  draw() {
    this.x = this.x + this.wayX;
    this.y = this.y + this.wayY;
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.y <= 0) {
      this.y = 0;
    }
    if (this.x + this.w >= canvasWidth) {
      this.x = canvasWidth - this.w;
    }
    if (this.y + this.h >= canvasHeight) {
      this.y = canvasHeight - this.h;
    }

    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  collide(o: Obstacle) {
    const OLX = this.x >= o.x && this.x <= o.x + o.w;
    const OLY = this.y >= o.y && this.y <= o.y + o.h;

    const ORX = this.x + this.w >= o.x && this.x + this.w <= o.x + o.w;
    const ORY = this.y + this.h >= o.y && this.y + this.h <= o.y + o.h;

    o.color = '#1ABC9C';
    if ((OLX && OLY) || (ORX && ORY) || (OLX && ORY) || (ORX && OLY)) {
      o.color = '#FD301A';
    }
  }
  collect(f: Food) {
    const OLX = this.x + this.w / 2 >= f.x && this.x + this.w / 2 <= f.x + f.w;
    const OLY = this.y + this.h / 2 >= f.y && this.y + this.h / 2 <= f.y + f.h;

    const ORX =
      this.x + this.w + this.w / 2 >= f.x &&
      this.x + this.w + this.w / 2 <= f.x + f.w;
    const ORY =
      this.y + this.h + this.h / 2 >= f.y &&
      this.y + this.h + this.h / 2 <= f.y + f.h;

    return (OLX && OLY) || (ORX && ORY) || (OLX && ORY) || (ORX && OLY);
  }
}
