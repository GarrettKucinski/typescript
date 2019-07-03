import AxiosResponse, { AxiosResponse } from 'axios';
import EventHandler from './EventHandler';
import HttpRequestHandler from './HttpRequestHandler';
import Attributes from './Attributes';
import Model from './Model';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new EventHandler(),
      new HttpRequestHandler<UserProps>(rootUrl)
    );
  }
}

export default User;
