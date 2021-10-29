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
      const pipeline = sharp(image) as sharp.Sharp;
      const promises: Promise<any>[] = [];

      fileName = fileName.split(".").slice(0, -1).join("");

      fileName = fileName.replace(/ /g, "");

      deviceWidths.forEach((width, i) => {
        const promise = pipeline
          .resize(width, get16_9Height(width), {
            fit: "cover",
            background: { r: 255, g: 255, b: 255, alpha: 0 },
          })
          .webp()
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
      reject((error as any).message);
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
