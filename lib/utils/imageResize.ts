import sharp from "sharp";
import fs from "fs/promises";
import * as os from "os";
import path from "path";

const deviceWidths: number[] = [200, 400, 700];

const get16_9Height = (width: number) => {
  return Math.floor((width * 3) / 4);
};

export async function resizeImages(image: Buffer, fileName: string) {
  return new Promise(async (resolve, reject) => {
    try {
      // let sizeInKb = Buffer.byteLength(image) / 1024;

      // let quality = sizeInKb > 1024 ? 40 : 80;

      let quality = 100;

      const pipeline = sharp(image) as sharp.Sharp;
      const promises: Promise<any>[] = [];

      fileName = fileName.split(".").slice(0, -1).join("");

      fileName = fileName.replace(/ /g, "");

      // console.log(quality);

      deviceWidths.forEach((width) => {
        const promise = pipeline
          .webp({ quality })
          .resize(width, get16_9Height(width), {
            fit: "cover",
            background: { r: 255, g: 255, b: 255, alpha: 0 },
          })
          .toFile(path.join(os.tmpdir(), fileName + "-" + width + ".webp"));
        promises.push(promise);
      });

      await Promise.all(promises);

      const tmpFiles: any[] = [];

      [...new Array(3)].forEach((_, i) => {
        tmpFiles.push(
          path.join(os.tmpdir(), fileName + "-" + [deviceWidths[i]] + ".webp")
        );
      });

      resolve(tmpFiles);
    } catch (error) {
      reject(
        "something went wrong. it's likely a problem with the server. please try again after sometime"
      );
    }
  });
}

export async function clearImages(paths: string[]) {
  const promises: Promise<any>[] = [];
  paths.forEach((path) => {
    const promise = fs.unlink(path);
    promises.push(promise);
  });

  await Promise.all(promises);

  return;
}
