export const blockSize = 50;
export let canvasHeight = 0;
export let canvasWidth = 0;

// x => horry => width
// y => verty => height
export const saveCanvasSize = (h: number, w: number) => {
  canvasHeight = h;
  canvasWidth = w;
};

export const foodList = ['🍇', '🍺', '🍕', '🥚', '🥞', '☕', '🍉', '🍹'];
// '📱',
// '🩰',
// '👖',
