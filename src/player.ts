export class Player {
  private step = 150;
  constructor(
    private height: number,
    private width: number,
    private x: number,
    private y: number,
    private ctx: CanvasRenderingContext2D
  ) {
    this.step = width;
  }
  run(direction: number) {
    this.x += direction * this.step;
    this.draw();
  }
  draw() {
    this.ctx.fillStyle = 'yellow';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
