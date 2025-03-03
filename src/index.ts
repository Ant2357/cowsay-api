import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { cowsay, CowsayOptions } from './features/cowsay/cowsay';
import { catMe } from './features/cat-me/catMe';
import { figlet } from "./features/figlet/figlet";

const app = new Hono<{ Bindings: CloudflareBindings }>()
app.use('*', cors());

app.get('/api/cowsay', (c) => {
  const text = c.req.query('text') ?? '';
  const eyes = c.req.query('eyes') ?? 'oo';
  const tongue = c.req.query('tongue') ?? '';

  const wrap = (() =>{
    const query = c.req.query('wrap') ?? 'false';
    const wrapStrValue = query.replaceAll(/\"|\'/g, "");
    return wrapStrValue.toLowerCase() === 'true';
  })();
  const wrapLength = (() =>{
    const inputWrapLength = c.req.query('wrapLength') ?? '40';
    return Number.isNaN(parseInt(inputWrapLength)) ? 40 : parseInt(inputWrapLength);
  })();
  const mode = c.req.query('mode') ?? '';

  const cowsayOptions: CowsayOptions = {
    text,
    eyes,
    tongue,
    wrap,
    wrapLength,
    mode
  };
  return c.json({
    text: cowsay(cowsayOptions),
    arrayText: cowsay(cowsayOptions).split('\n')
  });
  // return c.text(cowsay(cowsayOptions));
});

app.get('/api/cat-me', (c) => {
  const catName = c.req.query('catName') ?? '';
  const text = catMe(catName) ?? "cat not found ฅ^•ω•^ฅ";
  return c.json({
    text: text,
    arrayText: text.split('\n')
  });
  // return c.text(text);
});

app.get('/api/figlet', (c) => {
  const text = c.req.query('text') ?? '';
  const figletText = figlet(text);
  return c.json({
    text: figletText,
    arrText: figletText.split('\n')
  });
  // return c.text(figlet(text));
});

export default app;
