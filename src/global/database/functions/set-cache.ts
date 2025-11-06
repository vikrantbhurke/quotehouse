import { connectRedis } from "@/global/configurations";

export const setCache = async (
  key: string,
  data: any,
  ex: any = "EX",
  ttl: number = 86400
) => {
  const redis = await connectRedis();
  await redis.set(key, JSON.stringify(data), ex, ttl);
};
