import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { cowsay } from './features/cowsay/cowsay';

const app = new Hono<{ Bindings: CloudflareBindings }>()
app.use('*', cors());

app.get('/api/cowsay', (c) => {
  const text = c.req.query('text') ?? '';
  const eyes = c.req.query('eyes') ?? 'oo';
  const tongue = c.req.query('tongue') ?? '';
  return c.json({
    text: cowsay(text, eyes, tongue)
  });
  // return c.text(cowsay(text, eyes, tongue));
});

export default app;
