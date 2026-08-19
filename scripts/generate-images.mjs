import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const ROOT_DIRECTORY = process.cwd();

const SOURCE_DIRECTORY = path.join(ROOT_DIRECTORY, "sources", "illustrations");

const OUTPUT_DIRECTORY = path.join(ROOT_DIRECTORY, "public", "images");

const SUPPORTED_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".tif",
  ".tiff",
]);

const WEBP_OPTIONS = {
  quality: 85,
  effort: 6,
};

async function generateImages(sourceDirectory, outputDirectory) {
  await mkdir(outputDirectory, { recursive: true });

  const entries = await readdir(sourceDirectory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDirectory, entry.name);

    if (entry.isDirectory()) {
      const nestedOutputDirectory = path.join(outputDirectory, entry.name);

      await generateImages(sourcePath, nestedOutputDirectory);

      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();

    if (!SUPPORTED_EXTENSIONS.has(extension)) {
      continue;
    }

    const filename = path.basename(entry.name, extension);
    const outputPath = path.join(outputDirectory, `${filename}.webp`);

    await sharp(sourcePath).webp(WEBP_OPTIONS).toFile(outputPath);

    console.log(`✓ ${path.relative(ROOT_DIRECTORY, outputPath)}`);
  }
}

console.log("Generating WebP images...\n");

await generateImages(SOURCE_DIRECTORY, OUTPUT_DIRECTORY);

console.log("\nImage generation complete.");
