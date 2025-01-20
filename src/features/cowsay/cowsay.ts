// @ts-ignore
const npmCowsay = require('cowsay');

export const cowsay = (text: string, eyes: string, tongue: string) => {
  return npmCowsay.say({
    text: text,
    eyes: eyes,
    tongue: tongue
  });
};
