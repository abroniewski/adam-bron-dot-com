import { cp, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'url';
import { readdir, stat } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const sourceDir = join(rootDir, 'notes');
const targetDir = join(rootDir, 'public', 'images');

// Image file extensions to copy
const imageExtensions = ['.jpeg', '.jpg', '.png', '.gif', '.webp', '.svg'];

function isImageFile(filePath) {
  const ext = filePath.toLowerCase();
  return imageExtensions.some(ext => filePath.toLowerCase().endsWith(ext));
}

async function findImages(dir, baseDir = dir, images = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    // Skip .obsidian directory
    if (entry.name === '.obsidian') {
      continue;
    }
    
    if (entry.isDirectory()) {
      await findImages(fullPath, baseDir, images);
    } else if (entry.isFile() && isImageFile(entry.name)) {
      const relativePath = relative(baseDir, fullPath);
      images.push({ source: fullPath, relativePath });
    }
  }
  
  return images;
}

async function copyImages() {
  try {
    if (!existsSync(sourceDir)) {
      console.log('No notes directory found, skipping image copy');
      return;
    }

    // Find all images in notes directory
    const images = await findImages(sourceDir);
    
    if (images.length === 0) {
      console.log('No images found in notes directory');
      return;
    }

    // Remove existing public/images directory contents if it exists
    if (existsSync(targetDir)) {
      const { rm } = await import('node:fs/promises');
      await rm(targetDir, { recursive: true, force: true });
    }

    // Create public/images directory
    await mkdir(targetDir, { recursive: true });

    // Copy each image preserving relative path structure
    for (const { source, relativePath } of images) {
      const target = join(targetDir, relativePath);
      const targetDirPath = dirname(target);
      
      // Create subdirectories as needed
      await mkdir(targetDirPath, { recursive: true });
      
      // Copy the file
      await cp(source, target);
    }
    
    console.log(`✓ Copied ${images.length} image(s) from ${sourceDir} to ${targetDir}`);
  } catch (error) {
    console.error('Error copying images:', error);
    process.exit(1);
  }
}

copyImages();
