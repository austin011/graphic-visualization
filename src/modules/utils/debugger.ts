import { Config } from "../config";

let messages: Record<string, string[]> = {};

function debug(message: any, group: string = "") {
  if (Config.Debugger) {
    if (!messages[group]) {
      messages[group] = [];
    }

    messages[group].push(message);
  }
}

setInterval(() => {
  if (Object.keys(messages).length !== 0) {
    console.group("Debugger");

    Object.keys(messages).forEach((group) => {
      if (group === "") {
        messages[group].forEach((message) => {
          console.log(message);
        });
      } else {
        console.groupCollapsed(group);

        messages[group].forEach((message) => {
          console.log(message);
        });

        console.groupEnd();
      }
    });

    console.groupEnd();

    messages = {};
  }
}, 1000);

export { debug };
