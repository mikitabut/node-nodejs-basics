import { Worker } from 'worker_threads';
import os from 'os';
import { getDirname } from '../utils/dirname.js';

export const performCalculations = async () => {
  const amountOfCpus = os.cpus().length;
  const workers = [];
  let finishedWorkersAmount = 0;
  const __dirname = getDirname(import.meta.url);

  return await new Promise((resolve, reject) => {
    for (let i = 0; i < amountOfCpus; i++) {
      const worker = new Worker(`${__dirname}/worker.js`);

      worker.on('message', (result) => {
        workers[i] = { status: 'resolved', data: result };
      });

      worker.on('error', (error) => {
        console.error(error);
        workers[i] = { status: 'error', data: null };
      });

      worker.on('exit', () => {
        finishedWorkersAmount++;

        if (finishedWorkersAmount === amountOfCpus) {
          resolve(workers);
        }
      });

      worker.postMessage(i + 10);
    }
  });
};

console.log(await performCalculations());
