type Transformation = Partial<{
  xRadians: number;
  yRadians: number;
  zRadians: number;
}>;

class Rotation {
  xRadian: number;
  yRadian: number;
  zRadian: number;

  constructor(x: number, y: number, z: number) {
    this.xRadian = x;
    this.yRadian = y;
    this.zRadian = z;
  }

  /**
   * Sets the rotation of the object based on a transformation
   *
   * @param transformation - The transformation to apply to the object
   */
  public transform(transformation: Transformation) {
    if (transformation.xRadians) {
      this.xRadian = transformation.xRadians;
    }

    if (transformation.yRadians) {
      this.yRadian = transformation.yRadians;
    }

    if (transformation.zRadians) {
      this.zRadian = transformation.zRadians;
    }
  }
}

export { Rotation, type Transformation };
