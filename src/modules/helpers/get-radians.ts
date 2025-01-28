import { Transformation } from "../types/rotation";

type Degrees<
  T extends {
    xDegrees?: number;
    yDegrees?: number;
    zDegrees?: number;
  }
> = T;

type Radians<T> = T extends { xDegrees: number }
  ? { xRadians: number }
  : {} & (T extends { yDegrees: number } ? { yRadians: number } : {}) &
      (T extends { zDegrees: number } ? { zRadians: number } : {});

function getRadians<
  T extends { xDegrees?: number; yDegrees?: number; zDegrees?: number }
>(degrees: T): Radians<T> {
  const transformation: Partial<Transformation> = {};

  if (degrees.xDegrees !== undefined) {
    transformation.xRadians = (degrees.xDegrees * Math.PI) / 180;
  }

  if (degrees.yDegrees !== undefined) {
    transformation.yRadians = (degrees.yDegrees * Math.PI) / 180;
  }

  if (degrees.zDegrees !== undefined) {
    transformation.zRadians = (degrees.zDegrees * Math.PI) / 180;
  }

  return transformation as Radians<T>;
}

export { getRadians };
