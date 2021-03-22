/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/item.ts":
/*!*********************!*\
  !*** ./src/item.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Item = void 0;
class Item {
    constructor(height, width, x, y, ctx, color) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.color = color;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
exports.Item = Item;


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const item_1 = __webpack_require__(/*! ./item */ "./src/item.ts");
class Player extends item_1.Item {
    constructor(height, width, x, y, ctx) {
        super(height, width, x, y, ctx, 'yellow');
        this.step = 150;
        this.step = width;
    }
    walk(direction) {
        this.x += direction * this.step;
        this.draw();
    }
}
exports.Player = Player;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Write TypeScript code!
const item_1 = __webpack_require__(/*! ./item */ "./src/item.ts");
const player_1 = __webpack_require__(/*! ./player */ "./src/player.ts");
const canvas = document.querySelector('canvas');
let movement = 0;
const height = window.innerHeight;
const width = window.innerWidth;
canvas.height = height;
canvas.width = width;
const ctx = canvas.getContext('2d');
const player = new player_1.Player(20, 20, window.innerWidth / 2, window.innerHeight / 2, ctx);
player.draw();
document.body.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        movement = -1;
    }
    else if (event.code === 'ArrowRight') {
        movement = 1;
    }
    //
});
document.body.addEventListener('keyup', (event) => {
    movement = 0;
});
const itms = [];
for (let i = 0; i < 10; i++) {
    itms.push(new item_1.Item(40, 40, Math.random() * window.innerWidth - 40, Math.random() * window.innerHeight - 40, ctx, 'hotpink'));
}
setInterval(() => {
    ctx.fillStyle = '#1d1d1d';
    ctx.fillRect(0, 0, width, height);
    for (let itm of itms) {
        itm.draw();
    }
    player.walk(movement);
}, 1000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi10cy8uL3NyYy9pdGVtLnRzIiwid2VicGFjazovL2xlYXJuLXRzLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly9sZWFybi10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFybi10cy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7Ozs7OztBQ2pCQztBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxjQUFjO0FBQ2QsZUFBZSxtQkFBTyxDQUFDLDZCQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7O1VDZmQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUNyQmE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Q7QUFDQSxlQUFlLG1CQUFPLENBQUMsNkJBQVE7QUFDL0IsaUJBQWlCLG1CQUFPLENBQUMsaUNBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiZ2FtZS1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkl0ZW0gPSB2b2lkIDA7XHJcbmNsYXNzIEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCwgeCwgeSwgY3R4LCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5JdGVtID0gSXRlbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5QbGF5ZXIgPSB2b2lkIDA7XHJcbmNvbnN0IGl0ZW1fMSA9IHJlcXVpcmUoXCIuL2l0ZW1cIik7XHJcbmNsYXNzIFBsYXllciBleHRlbmRzIGl0ZW1fMS5JdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGhlaWdodCwgd2lkdGgsIHgsIHksIGN0eCkge1xyXG4gICAgICAgIHN1cGVyKGhlaWdodCwgd2lkdGgsIHgsIHksIGN0eCwgJ3llbGxvdycpO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IDE1MDtcclxuICAgICAgICB0aGlzLnN0ZXAgPSB3aWR0aDtcclxuICAgIH1cclxuICAgIHdhbGsoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IGRpcmVjdGlvbiAqIHRoaXMuc3RlcDtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vLyBXcml0ZSBUeXBlU2NyaXB0IGNvZGUhXHJcbmNvbnN0IGl0ZW1fMSA9IHJlcXVpcmUoXCIuL2l0ZW1cIik7XHJcbmNvbnN0IHBsYXllcl8xID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxubGV0IG1vdmVtZW50ID0gMDtcclxuY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5jb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbmNvbnN0IHBsYXllciA9IG5ldyBwbGF5ZXJfMS5QbGF5ZXIoMjAsIDIwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIsIGN0eCk7XHJcbnBsYXllci5kcmF3KCk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0xlZnQnKSB7XHJcbiAgICAgICAgbW92ZW1lbnQgPSAtMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgIG1vdmVtZW50ID0gMTtcclxuICAgIH1cclxuICAgIC8vXHJcbn0pO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XHJcbiAgICBtb3ZlbWVudCA9IDA7XHJcbn0pO1xyXG5jb25zdCBpdG1zID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgaXRtcy5wdXNoKG5ldyBpdGVtXzEuSXRlbSg0MCwgNDAsIE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCAtIDQwLCBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVySGVpZ2h0IC0gNDAsIGN0eCwgJ2hvdHBpbmsnKSk7XHJcbn1cclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjMWQxZDFkJztcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGZvciAobGV0IGl0bSBvZiBpdG1zKSB7XHJcbiAgICAgICAgaXRtLmRyYXcoKTtcclxuICAgIH1cclxuICAgIHBsYXllci53YWxrKG1vdmVtZW50KTtcclxufSwgMTAwMCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=