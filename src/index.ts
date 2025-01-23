import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { cowsay } from './features/cowsay/cowsay';

const app = new Hono<{ Bindings: CloudflareBindings }>()
app.use('*', cors());

app.get('/api/cowsay', (c) => {
  const text = c.req.query('text') ?? '';
  const eyes = c.req.query('eyes') ?? 'oo';
  const tongue = c.req.query('tongue') ?? '';
  const wrap = (() =>{
    const query = c.req.query('wrap') ?? 'true';
    const wrapStrValue = query.replaceAll(/\"|\'/g, "");
    return wrapStrValue.toLowerCase() === 'true';
  })();
  const wrapLength = (() =>{
    const inputWrapLength = c.req.query('wrapLength') ?? '40';
    return Number.isNaN(parseInt(inputWrapLength)) ? 40 : parseInt(inputWrapLength);
  })();

  return c.json({
    text: cowsay(text, eyes, tongue, wrap, wrapLength)
  });
  // return c.text(cowsay(text, eyes, tongue, wrap, wrapLength));
});

export default app;
