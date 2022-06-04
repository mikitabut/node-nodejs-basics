import fs from 'fs';
import { getDirname } from '../utils/dirname.js';

export const remove = async () => {
  const __dirname = getDirname(import.meta.url);
  const filename = `${__dirname}/files/fileToRemove.txt`;

  fs.rm(filename, (err) => {
    if (err && err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }

    return 1;
  });
};

remove();
