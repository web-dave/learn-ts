export class Item {
  constructor(
    public height: number,
    public width: number,
    public x: number,
    public y: number,
    public ctx: CanvasRenderingContext2D,
    public color: string
  ) {}
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
