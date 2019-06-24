import User from './User';
import Company from './Company';
import CustomMap from './CustomMap';

const user = new User();
const company = new Company();

const mapConfig = {
  divId: 'map',
  location: user.location
}

const customMap = new CustomMap(mapConfig);
customMap.addMarker(user);
customMap.addMarker(company);
