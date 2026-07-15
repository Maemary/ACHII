/**
 * replace-refs.js
 *
 * Reads cloudinary-manifest.json (produced by upload-to-cloudinary.js) and
 * rewrites every occurrence of a local image path (e.g. "/images/promise.jpeg")
 * in your source files to the matching Cloudinary URL.
 *
 * IMPORTANT: Commit or back up your work before running this — it edits
 * files in place. Review the diff afterward before deleting anything local.
 *
 * Run:
 *   node replace-refs.js
 *
 * Place this file at the root of your Next.js project. Adjust SRC_DIRS
 * below if your source lives somewhere other than /app and /components.
 */

const fs = require("fs");
const path = require("path");

const manifestPath = path.join(__dirname, "cloudinary-manifest.json");
if (!fs.existsSync(manifestPath)) {
  console.error("cloudinary-manifest.json not found. Run upload-to-cloudinary.js first.");
  process.exit(1);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

// Adjust to match where your components/pages live.
const SRC_DIRS = ["app", "components"];
const SRC_EXT_REGEX = /\.(js|jsx|ts|tsx)$/;

let totalFilesChanged = 0;
let totalReplacements = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(fullPath);
    } else if (SRC_EXT_REGEX.test(entry.name)) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  let fileChanged = false;

  for (const [localPath, cloudUrl] of Object.entries(manifest)) {
    // Matches "/images/foo.jpeg", '/images/foo.jpeg', or `/images/foo.jpeg`
    const escaped = localPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(["'\`])${escaped}\\1`, "g");
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, (_match, quote) => `${quote}${cloudUrl}${quote}`);
      totalReplacements += matches.length;
      fileChanged = true;
    }
  }

  if (fileChanged) {
    fs.writeFileSync(filePath, content, "utf-8");
    totalFilesChanged++;
    console.log(`Updated: ${filePath}`);
  }
}

for (const dir of SRC_DIRS) {
  walk(path.join(__dirname, dir));
}

console.log(`\nDone. ${totalReplacements} references updated across ${totalFilesChanged} files.`);