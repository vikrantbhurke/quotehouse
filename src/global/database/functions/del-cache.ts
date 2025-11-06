import { connectRedis } from "@/global/configurations";

export const delCache = async (key: string) => {
  const redis = await connectRedis();
  await redis.del(key);
};
