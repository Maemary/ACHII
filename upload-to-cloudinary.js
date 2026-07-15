/**
 * upload-to-cloudinary.js
 *
 * Uploads every image in /public/images (recursively) to Cloudinary,
 * preserving the folder structure, and writes a cloudinary-manifest.json
 * mapping each local path (e.g. "/images/promise.jpeg") to its new
 * Cloudinary secure_url.
 *
 * Setup:
 *   npm install cloudinary dotenv
 *
 * Create a .env file in your project root with:
 *   CLOUDINARY_CLOUD_NAME=your_cloud_name
 *   CLOUDINARY_API_KEY=your_api_key
 *   CLOUDINARY_API_SECRET=your_api_secret
 *
 * Run:
 *   node upload-to-cloudinary.js
 *
 * Place this file at the root of your Next.js project (same level as /public).
 */

require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IMAGES_DIR = path.join(__dirname, "public", "images");
const IMAGE_EXT_REGEX = /\.(jpe?g|png|webp|gif)$/i;
const manifest = {};

function collectFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(fullPath, out);
    } else if (IMAGE_EXT_REGEX.test(entry.name)) {
      out.push(fullPath);
    }
  }
  return out;
}

async function uploadFile(filePath) {
  const relativePath = path.relative(path.join(__dirname, "public"), filePath); // e.g. images/Volunteers/volunteer1.jpeg
  const relativeNoExt = relativePath.replace(/\.[^/.]+$/, "").split(path.sep).join("/");
  const localKey = "/" + relativePath.split(path.sep).join("/"); // e.g. /images/Volunteers/volunteer1.jpeg

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: relativeNoExt,
      folder: "achii",
      overwrite: false,
    });
    manifest[localKey] = result.secure_url;
    console.log(`✓ ${localKey} -> ${result.secure_url}`);
  } catch (err) {
    console.error(`✗ Failed: ${localKey} — ${err.message}`);
  }
}

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Could not find ${IMAGES_DIR}. Run this from your project root.`);
    process.exit(1);
  }

  const files = collectFiles(IMAGES_DIR);
  console.log(`Found ${files.length} images. Uploading...\n`);

  // Sequential to stay comfortably under free-tier rate limits.
  for (const file of files) {
    await uploadFile(file);
  }

  const manifestPath = path.join(__dirname, "cloudinary-manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nDone. ${Object.keys(manifest).length}/${files.length} uploaded successfully.`);
  console.log(`Manifest saved to ${manifestPath}`);
}

main();