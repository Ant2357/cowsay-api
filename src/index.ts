import { Hono } from 'hono';
import { cors } from 'hono/cors';
// @ts-ignore
const cowsay = require('cowsay');

const app = new Hono<{ Bindings: CloudflareBindings }>()
app.use('*', cors());

app.get('/api/cowsay', (c) => {
  const text = c.req.query('text') ?? '';
  const cowsayText = cowsay.say({
    text: text
  });
  return c.json({
    text: cowsayText
  });
  // return c.text(cowsayText);
});

export default app
