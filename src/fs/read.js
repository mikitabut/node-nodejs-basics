import { readFile } from 'fs';
import { getDirname } from '../utils/dirname.js';

export const read = async () => {
  const __dirname = getDirname(import.meta.url);
  const sourceFileName = `${__dirname}/files/fileToRead.txt`;

  readFile(sourceFileName, { encoding: 'utf8' }, (err, data) => {
    if (err && err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }

    console.log(data);
  });
};

read();
