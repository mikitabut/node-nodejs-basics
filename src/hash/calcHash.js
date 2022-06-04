import crypto from 'crypto';
import fs from 'fs';
import { getDirname } from '../utils/dirname.js';

export const calculateHash = async () => {
  const __dirname = getDirname(import.meta.url);
  const sourceFileName = `${__dirname}/files/fileToCalculateHashFor.txt`;

  return fs.readFile(sourceFileName, { encoding: 'utf8' }, (err, data) => {
    if (err && err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }

    const secret = 'SomeSecret';
    const hash = crypto.createHmac('sha256', secret).update(data).digest('hex');

    // It's not clear what to do with that hash, so let's console it :)
    console.log(hash);
    return hash;
  });
};

calculateHash();
