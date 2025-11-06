import { ClientSession } from "mongoose";

export const getSession = (session?: ClientSession) => {
  return session ? { session } : undefined;
};
