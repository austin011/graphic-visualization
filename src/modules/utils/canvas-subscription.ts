/**
 * Subscribe to the event for when the canvas is properly loaded into the window object
 *
 * @see subscribe
 */

type Function = () => void;

let subscriptions: Function[] = [];

function _emit() {
  subscriptions.forEach((callback) => callback());
  subscriptions = [];
}

function subscribe(callback: Function) {
  subscriptions.push(callback);
}

export { subscribe, _emit };
