import process from 'process';

export const parseArgs = () => {
  const args = process.argv.slice(2);

  const parsedArgs = args.reduce((acc, el, index) => {
    if (acc.length === 0) {
      return el.slice(2);
    }

    if (index === 0) {
      return acc + el.slice(2);
    } else if (index % 2 === 0) {
      return `${acc}, ${el.slice(2)}`;
    } else {
      return `${acc} is ${el}`;
    }
  }, '');

  console.log(parsedArgs);
};

parseArgs();
