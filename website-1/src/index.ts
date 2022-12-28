import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.get('/', (_: Request, res: Response) => {
  return res.send('Hello World');
});

app.get('/users/:name', (req: Request, res: Response) => {
  return res.send(`Hello ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});