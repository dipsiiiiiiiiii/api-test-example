import { UserDao } from '../models';

const createUser = userInfo => {
  return UserDao.createUser(userInfo);
};

const getUserById = id => {
  return UserDao.getUserById(id);
};

export default { createUser, getUserById };
