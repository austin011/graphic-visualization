import IRender from "./interfaces/irender";
import { Size } from "./types/size";
import { Vector3d } from "./types/vector";

export default class Renderable implements IRender {
  size: Size;
  position: Vector3d;

  constructor(size: Size, position: Vector3d) {
    this.size = size;
    this.position = position;
  }

  public render() {}
}
