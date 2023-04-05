type UserRole = 'admin' | 'user' | 'guest';

type UserAge = Record<UserRole, number>;

const userAges: UserAge = {
  admin: 35,
  user: 28,
  guest: 22,
};