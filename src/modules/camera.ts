import Bin from "./bin";
import { Config } from "./config";
import { debug } from "./helpers/debugger";
import { getRadians } from "./helpers/get-radians";
import ICamera from "./interfaces/icamera";
import { MouseMove } from "./mouse-move";
import { Rotation } from "./types/rotation";
import { Vector3d } from "./types/vector";

export default class Camera implements ICamera {
  position: Vector3d;
  axis: Rotation;
  inFocus = false;
  mousePosition: MouseMove;

  constructor() {
    this.position = new Vector3d(0, 5, 5);
    this.axis = new Rotation(0, 0, 0);

    this.mousePosition = new MouseMove();

    this.eventListeners();

    debug("Camera initialized...");
  }

  private onMouseMove() {
    const virtualMouseSensitivity = Config.MouseSensitivity * Bin.Scale;

    /**
     * We want to rotate the camera a max of 720 degrees from the center
     * of the screen to the furthust x or y position on the screen
     *
     * ----------------------------------------------------------------
     *
     * How many pixels to move the camera by a single degree of rotation **
     *
     * x = (1920 / 720) / sens
     * y = (1080 / 720) / sens
     *
     */
    const xDegreesPerPixel = 1920 / 720 / virtualMouseSensitivity;
    const yDegreesPerPixel = 1080 / 720 / virtualMouseSensitivity;

    const { x: xPixels, y: yPixels } = this.mousePosition.position;

    const xDegrees = xPixels * xDegreesPerPixel;
    const yDegrees = yPixels * yDegreesPerPixel;

    const transformation = getRadians({ xDegrees, yDegrees });

    //Transform the axis by x and y radians
    this.axis.transform({
      xRadians: transformation.xRadians,
      yRadians: transformation.yRadians,
    });

    debug(transformation, "Camera Rotation");
  }

  private eventListeners() {
    window.addEventListener("focus", this.focusIn.bind(this));
    window.addEventListener("blur", this.focusOut.bind(this));
    window.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  private focusIn() {
    debug("Camera in focus...");

    this.inFocus = true;
  }

  private focusOut() {
    debug("Camera out of focus...");

    this.inFocus = false;
  }
}
