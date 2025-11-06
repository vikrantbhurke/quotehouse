import { connectRedis } from "@/global/configurations";

export const delPrefixCache = async (key: string) => {
  const redis = await connectRedis();
  const keys = await redis.keys(key);
  keys.forEach(async (key) => await redis.del(key));
};
