import { subscribe } from "../utils/canvas-subscription";
import { Vector } from "../types/vector";

class MousemoveEvent {
  position: Vector;

  constructor() {
    this.position = new Vector(0, 0);

    // Waits for the canvas to be loaded into the window
    subscribe(this.eventListeners.bind(this));
  }

  private onMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;

    const middle = new Vector(window.innerWidth / 2, window.innerHeight / 2);

    const position = new Vector(clientX - middle.x, middle.y - clientY);

    this.position = position;
  }

  private eventListeners() {
    window.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
  }
}

export { MousemoveEvent };
