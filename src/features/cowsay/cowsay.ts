// @ts-ignore
const npmCowsay = require('cowsay');

export const cowsay = (inputText: string) => {
  return npmCowsay.say({
    text: inputText
  });
};
