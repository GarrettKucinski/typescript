import { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

interface ModelAttributes<T extends HasId> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(): T[K];
}

interface Http<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

class Model<T> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private http: Http<T>,
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  async fetch(): void {
    const id = this.get('id');

    if(!id) {
      throw new Error('Must provide and Id to fetch a users data.');
    }

    const { data }: AxiosResponse = await this.http.fetch(id);
    this.set(data);
  }

  async save(): void {
    try {
      await this.http.save(this.attributes.getAll());
      this.trigger('save');
    } catch(err) {
      this.trigger('error');
    }
  }
}

export default Model;
