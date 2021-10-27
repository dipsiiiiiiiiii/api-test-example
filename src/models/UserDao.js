import prisma from '../../prisma';

const createUser = async userInfo => {
  const { email, name } = userInfo;
  const result = await prisma.user.create({ data: { email, name } });

  return result;
};

const getUserById = async id => {
  return await prisma.user.findUnique({ where: { id } });
};

export default {
  createUser,
  getUserById,
};
