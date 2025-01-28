import Camera from "./camera";

export default class Bin {
  public static Scale: number;
  public static Camera: Camera;

  private static onWindowResize() {
    const { innerWidth } = window;

    const defScreenWidth = 1920;

    if (innerWidth > defScreenWidth) {
      Bin.Scale = 1;
    } else {
      Bin.Scale = innerWidth / defScreenWidth;
    }
  }

  static {
    //Initialize event listeners
    window.addEventListener("resize", Bin.onWindowResize);
    Bin.onWindowResize();

    Bin.Camera = new Camera();
  }
}
