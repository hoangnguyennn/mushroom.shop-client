import { parse } from 'url';
import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  server.listen(port, () => console.log(`App was running at port ${port}`));
});
