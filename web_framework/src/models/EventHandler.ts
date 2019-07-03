type Callback = () => void;

class EventHandler {
  eventQueue: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.eventQueue[eventName] || [];
    this.eventQueue = {
      ...this.eventQueue,
      [eventName]: [...handlers, callback]
    };
  }

  trigger = (eventName: string) => {
    const handlers = this.eventQueue[eventName];
    if (!handlers || !handlers.length) {
      return;
    }

    handlers.map(event => event());
  }
}

export default EventHandler;
