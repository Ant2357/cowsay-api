// @ts-ignore
import npmFiglet from 'figlet';
// @ts-ignore
import standard from "figlet/importable-fonts/Standard.js";

export const figlet = (text: string) => {
  try {
    npmFiglet.parseFont("Standard", standard);

    return npmFiglet.textSync(text);
  } catch (err) {
    return err;
  }
};
