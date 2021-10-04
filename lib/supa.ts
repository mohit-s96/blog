import * as fs from "fs";
import * as path from "path";

export function readImage(fileName: string) {
  const data = fs.readFileSync(`${process.cwd()}/${fileName}`);

  return data;
}
