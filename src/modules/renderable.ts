import IRender from "./interfaces/irender";
import { Rotation } from "./types/rotation";
import { Size } from "./types/size";
import { Vector3d } from "./types/vector";

export default class Renderable implements IRender {
  size: Size;
  position: Vector3d;
  axis: Rotation;

  constructor(size: Size, position: Vector3d, axis: Rotation) {
    this.size = size;
    this.position = position;
    this.axis = axis;
  }

  public render() {}
}
