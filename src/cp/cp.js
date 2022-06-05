import { spawn } from 'child_process';
import { getDirname } from '../utils/dirname.js';

export const spawnChildProcess = async (args) => {
  const __dirname = getDirname(import.meta.url);
  const child = spawn(`node`, [`${__dirname}/files/script.js`, ...args]);

  child.on('error', (error) => {
    console.log(error);
  });
  
  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
};

const args = process.argv.slice(2);
spawnChildProcess(args);
