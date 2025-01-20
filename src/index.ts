import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { cowsay } from './features/cowsay/cowsay';

const app = new Hono<{ Bindings: CloudflareBindings }>()
app.use('*', cors());

app.get('/api/cowsay', (c) => {
  const cowsayText = cowsay(c.req.query('text') ?? '');
  return c.json({
    text: cowsayText
  });
  // return c.text(cowsayText);
});

export default app;
