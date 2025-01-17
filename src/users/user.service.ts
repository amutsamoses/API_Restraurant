import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TIUsers, TSUsers, Users } from "../drizzle/schema";

export const userService = async (): Promise<TSUsers[] | null> => {
  return await db.query.Users.findMany();
};

//get one user
export const getUserService = async (
  id: number
): Promise<TIUsers | undefined> => {
  return await db.query.Users.findFirst({
    where: eq(Users.id, id),
  });
};

//create user
export const createUserService = async (user: TIUsers): Promise<TIUsers> => {
  await db.insert(Users).values(user);
  return user;
};

//update user
export const updateUserService = async (
  id: number,
  user: TIUsers
): Promise<TIUsers> => {
  await db.update(Users).set(user).where(eq(Users.id, id));
  return user;
};
//delete user
export const deleteUserService = async (id: number) => {
  await db.delete(Users).where(eq(Users.id, id));
  return "user deleted successfully!😑";
};
