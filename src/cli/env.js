import process from 'process';

export const parseEnv = () => {
  const envVariables = process.env;

  const rssKeys = Object.entries(envVariables)
    .filter(([key]) => key.startsWith('RSS_'))
    .reduce((acc, [key, value]) => {
      return [acc, `${key}=${value}`].filter((val) => !!val).join('; ');
    }, '');

  console.log(rssKeys);
};

parseEnv();
