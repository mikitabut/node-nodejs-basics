import zlib from 'zlib';
import fs from 'fs';

import { getDirname } from '../utils/dirname.js';

export const compress = async () => {
  const __dirname = getDirname(import.meta.url);
  const readFilePath = `${__dirname}/files/fileToCompress.txt`;
  const writeFilePath = `${__dirname}/files/archive.gz`;
  const gzip = zlib.createGzip();

  if (fs.existsSync(readFilePath) && !fs.existsSync(writeFilePath)) {
    const readStream = fs.createReadStream(readFilePath);
    const writeStream = fs.createWriteStream(writeFilePath);
    readStream.pipe(gzip).pipe(writeStream);
  } else {
    // I know that this is not necessary, but why not :)
    throw new Error('FS operation failed');
  }
};

compress();
