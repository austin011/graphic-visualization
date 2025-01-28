import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import App from "./modules/app";
import { Config } from "./modules/config";

Config.Debugger = true;

const app = new App();
app.start();
