import User from "./models/User";

const user = User.buildUser({ name: 'Jamie', id: 2 });

user.on('save', () => {
  console.log(user.attributes.data);
});

user.save();
