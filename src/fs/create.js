import fs from 'fs';
import { getDirname } from '../utils/dirname.js';

export const create = async () => {
  const __dirname = getDirname(import.meta.url);
  const fileName = 'fresh.txt';
  const text = 'I am fresh and young';
  const errorText = 'FS operation failed';

  // Flag wx needed for error in case of file exists
  // https://nodejs.org/api/fs.html#file-system-flags
  return fs.writeFile(
    `${__dirname}/files/${fileName}`,
    text,
    { flag: 'wx' },
    (err) => {
      if (err && err.code === 'EEXIST') {
        throw new Error(errorText);
      }

      return 1;
    }
  );
};

create();
