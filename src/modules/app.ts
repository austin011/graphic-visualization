import Bin from "./bin";
import { _emit } from "./helpers/canvas-subscription";
import { debug } from "./helpers/debugger";

//TODO Delete

declare global {
  interface Window {
    frame: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
  }
}

function resizeWindow() {
  const { canvas } = window;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function windowFocus() {
  debug("Window in focus...");

  window.canvas.focus();
}

export default class App {
  constructor() {
    this.initialize();
    this.eventListeners();

    debug("App ready...");
  }

  private initialize() {
    const canvas = document.getElementById("app") as HTMLCanvasElement;

    window.canvas = canvas;
    window.frame = canvas.getContext("2d")!;

    //Initialize the static bin variables
    Bin;

    _emit();
  }

  private eventListeners() {
    window.addEventListener("resize", resizeWindow);
    window.addEventListener("focus", windowFocus);

    resizeWindow();
  }

  private render() {
    window.frame.clearRect(0, 0, window.canvas.width, window.canvas.height);

    //TODO Delete
    window.frame.fillStyle = "#00FF00";
    window.frame.fillRect(0, 0, 50, 50);
  }

  public start() {
    this.render();

    window.requestAnimationFrame(this.start.bind(this));
  }
}
