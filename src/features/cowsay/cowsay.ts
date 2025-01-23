// @ts-ignore
const npmCowsay = require('cowsay');

export const cowsay = (text: string, eyes: string, tongue: string, wrap: boolean, wrapLength: number) => {
  return npmCowsay.say({
    text: text,
    eyes: eyes,
    tongue: tongue,
    wrap: wrap,
    wrapLength: wrapLength
  });
};
