import express, { Express, Request, Response } from 'express';

import { blobsRoute } from './routes/blobs';
import { blobRoute } from './routes/blob';

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.use('/api/blobs', blobsRoute);
app.use('/api/blob', blobRoute);

app.get('/', (_: Request, res: Response) => {
  return res.send('Hello World');
});

app.get('/users/:name', (req: Request, res: Response) => {
  return res.send(`Hello ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
