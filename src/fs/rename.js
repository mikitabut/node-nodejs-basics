import fs from 'fs';
import { getDirname } from '../utils/dirname.js';

export const rename = async () => {
  const __dirname = getDirname(import.meta.url);
  const sourceFileName = `${__dirname}/files/wrongFilename.txt`;
  const destFileName = `${__dirname}/files/properFilename.md`;

  if (fs.existsSync(destFileName) || !fs.existsSync(sourceFileName)) {
    throw new Error('FS operation failed');
  }

  fs.renameSync(sourceFileName, destFileName);
};

rename();
