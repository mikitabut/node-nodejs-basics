import fs from 'fs';
import { getDirname } from '../utils/dirname.js';

export const read = async () => {
  const __dirname = getDirname(import.meta.url);
  const filePath = `${__dirname}/files/fileToRead.txt`;

  if (fs.existsSync(filePath)) {
    const stream = fs.createReadStream(filePath);
    stream.pipe(process.stdout);
  } else {
    // I know that this is not necessary, but why not :)
    throw new Error('FS operation failed');
  }
};

read();
