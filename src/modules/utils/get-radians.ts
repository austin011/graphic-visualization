type Degrees<
  T extends Partial<{
    xDegrees: number;
    yDegrees: number;
    zDegrees: number;
  }>
> = T;

type Radians<
  T extends Partial<{ xDegrees: number; yDegrees: number; zDegrees: number }>
> = {
  [K in keyof T as K extends "xDegrees"
    ? "xRadians"
    : K extends "yDegrees"
    ? "yRadians"
    : K extends "zDegrees"
    ? "zRadians"
    : never]: number;
};

function getRadians<
  T extends Partial<{
    xDegrees: number;
    yDegrees: number;
    zDegrees: number;
  }>
>(degrees: Degrees<T>) {
  const transformation: Radians<T> = {} as Radians<T>;

  if (degrees.xDegrees) {
    const xDegrees = degrees.xDegrees;
    const xRadians = (xDegrees * Math.PI) / 180;

    transformation.xRadians = xRadians;
  }

  if (degrees.yDegrees) {
    const yDegrees = degrees.yDegrees;
    const yRadians = (yDegrees * Math.PI) / 180;

    transformation.yRadians = yRadians;
  }

  if (degrees.zDegrees) {
    const zDegrees = degrees.zDegrees;
    const zRadians = (zDegrees * Math.PI) / 180;

    transformation.zRadians = zRadians;
  }

  return transformation;
}

export { getRadians };
