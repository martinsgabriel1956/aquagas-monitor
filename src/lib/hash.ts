import bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 12);
}
