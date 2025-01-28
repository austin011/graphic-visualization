import { Vector3d } from "../types/vector";
import { Rotation } from "../types/rotation";

export default interface ICamera {
  position: Vector3d;
  axis: Rotation;
}
