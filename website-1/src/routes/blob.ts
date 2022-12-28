import { Router } from 'express';

export const blobRoute = Router();

blobRoute.get('/', (req, res) => {
  res.send("blob");
});