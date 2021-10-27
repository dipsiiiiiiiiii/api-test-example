import { UserService } from '../services';

const createUser = async (req, res) => {
  await UserService.createUser(req.body);

  res.status(201).json({ message: 'USER HAS BEEN CREATED' });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const result = await UserService.getUserById(Number(id));

  res.status(200).json(result);
};

export default { createUser, getUserById };
