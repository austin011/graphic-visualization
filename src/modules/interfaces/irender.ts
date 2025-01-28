import { Size } from "../types/size";
import { Vector3d } from "../types/vector";

export default interface IRender {
  size: Size;
  position: Vector3d;

  render: () => void;
}
