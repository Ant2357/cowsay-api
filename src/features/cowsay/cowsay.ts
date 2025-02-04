// @ts-ignore
const npmCowsay = require('cowsay');

export type CowsayOptions = {
  text: string;
  eyes: string;
  tongue: string;
  wrap: boolean;
  wrapLength: number;
};

export const cowsay = (cowsayOptions: CowsayOptions) => {
  return npmCowsay.say({
    text: cowsayOptions.text,
    eyes: cowsayOptions.eyes,
    tongue: cowsayOptions.tongue,
    wrap: cowsayOptions.wrap,
    wrapLength: cowsayOptions.wrapLength
  });
};
