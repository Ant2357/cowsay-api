// @ts-ignore
const npmCatMe = require('cat-me');

export const catMe = (catName: string) => {
  return npmCatMe(catName)
};
