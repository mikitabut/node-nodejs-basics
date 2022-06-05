import fs from 'fs';
import { getDirname } from '../utils/dirname.js';
import process from 'process';

export const write = async () => {
  const __dirname = getDirname(import.meta.url);
  const filePath = `${__dirname}/files/fileToWrite.txt`;

  if (fs.existsSync(filePath)) {
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
  } else {
    // I know that this is not necessary, but why not :)
    throw new Error('FS operation failed');
  }
};

write();
