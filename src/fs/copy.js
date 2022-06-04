import fs from 'fs';
import path from 'path';
import { getDirname } from '../utils/dirname.js';

function copyFolderRecursive(sourceFolderName, destFolderName) {
  const files = fs.readdirSync(sourceFolderName);
  fs.mkdirSync(destFolderName);

  for (let elName of files) {
    const sourcePath = path.join(sourceFolderName, elName);
    const destPath = path.join(destFolderName, elName);
    const isDirectory = fs.lstatSync(sourcePath).isDirectory();

    if (isDirectory) {
      copyFolderRecursive(sourcePath, destPath);
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  }
}

export const copy = async () => {
  const __dirname = getDirname(import.meta.url);
  const sourceFolderName = `${__dirname}/files`;
  const destFolderName = `${__dirname}/files_copy`;

  if (fs.existsSync(destFolderName) || !fs.existsSync(sourceFolderName)) {
    throw new Error('FS operation failed');
  } else {
    copyFolderRecursive(sourceFolderName, destFolderName);
  }
};

copy();
