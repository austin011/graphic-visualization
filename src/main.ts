import "./style.css";
import { App } from "./modules/app";
import { Config } from "./modules/config";

Config.Debugger = true;

const app = new App();

app.start();
