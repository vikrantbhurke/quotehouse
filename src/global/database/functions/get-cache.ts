import { connectRedis } from "@/global/configurations";

export const getCache = async (key: string) => {
  const redis = await connectRedis();
  return await redis.get(key);
};
