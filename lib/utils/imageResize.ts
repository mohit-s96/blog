import sharp from "sharp";
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

      console.log("starting resize");

      deviceWidths.forEach((width, i) => {
        const promise = pipeline
          .resize(width, get16_9Height(width), {
            fit: "contain",
            background: { r: 255, g: 255, b: 255, alpha: 0 },
          })
          .webp()
          .toFile(path.join(os.tmpdir(), fileName + i + ".webp"));
        promises.push(promise);
      });

      const res = await Promise.all(promises);
      resolve(res);
    } catch (error) {
      reject((error as any).message);
    }
  });
}
