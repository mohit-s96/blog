import fs from "fs/promises";
let retries = 0;
export async function logToFile(data: any) {
  try {
    retries++;
    let str = JSON.stringify(data);
    let prefix = `\n${Date.now()}\n----------------------------------\n`;
    let postfix = "----------------------------------";
    str = `${prefix}${str}${postfix}`;
    await fs.writeFile("debugLogs/upload.log", str, { flag: "a" });
    retries = 0;
  } catch (error) {
    if (retries < 5) {
      logToFile(data);
    }
  }
}
