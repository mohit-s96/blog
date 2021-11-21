import redis from "redis";
// redis client inference because the don't export types by default
export type RedisClientType = typeof redis.createClient extends () => infer ResultType
  ? ResultType
  : never;

export function transformRedisKey(key: string) {
  return key.split(" ").join("-");
}

export function getUri(): string {
  let uri: string;
  if (process.env.NODE_ENV === "development") uri = "http://localhost:5000";
  else uri = "https://mohits.dev";

  return uri;
}
