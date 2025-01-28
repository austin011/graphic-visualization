import { subscribe } from "./helpers/canvas-subscription";
import { Vector } from "./types/vector";

//TODO - MAKE THE DELTA POSITION SO THAT THE CLASSES THAT USE THIS CAN USE IT BASED ON THE VECTOR OF WHERE THE MOUSE IS GOING
class MouseMove {
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

export { MouseMove };
