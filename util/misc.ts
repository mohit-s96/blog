import { RedisClient } from "redis";

export function setRedisKey(
  client: RedisClient,
  key: string,
  time: number,
  value: string
) {
  return new Promise((resolve, reject) => {
    client.setex(key, time, value, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function getRedisKey(client: RedisClient, key: string) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function transformRedisKey(key: string) {
  return key.split(" ").join("-");
}
