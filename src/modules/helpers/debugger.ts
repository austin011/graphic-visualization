const messages: string[] = [];

function debug(message: string) {
  messages.push(message);
}

setInterval(() => {
  if (messages.length !== 0) {
    console.group("Debugger");

    messages.forEach((message) => {
      console.log(message);
    });

    console.groupEnd();

    messages.length = 0;
  }
}, 1000);

export { debug };
