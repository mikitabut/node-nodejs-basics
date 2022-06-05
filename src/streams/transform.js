import { Transform } from 'stream';

export const transform = async () => {
  const reversedDataStream = new Transform({
    transform(chunk, encoding, cb) {
      let reversedData = '';
      const data = chunk.toString('utf8');
      for (let i = 0; i < data.length; i++) {
        reversedData += data[data.length - 1 - i];
      }
      this.push(reversedData);
      cb();
    },
  });
  process.stdin.pipe(reversedDataStream).pipe(process.stdout);
};

transform();
