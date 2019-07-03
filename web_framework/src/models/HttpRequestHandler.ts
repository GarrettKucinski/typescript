import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}
class HttpRequestHandler<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id: userId } = data;

    if (userId) {
      return axios.put(`${this.rootUrl}/${userId}`, this.data);
    } else {
      return axios.post(this.rootUrl, this.data);
    }
  }
}

export default HttpRequestHandler;
