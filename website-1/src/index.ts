import express, { Express, Request, Response } from 'express';

import { getConfig, Config } from './shared/config';
import { blobsRoute } from './routes/blobs';
import { blobRoute } from './routes/blob';
import cors from 'cors';

const APP_CONFIG = getConfig();
const app: Express = express();
const port: number = APP_CONFIG.port || 8080;

app.use(
  cors({
    origin: '*'
  })
);

app.set('appConfig', APP_CONFIG);
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
