import { Router } from 'express';

export const blobsRoute = Router();

/**
 * List all blobs. Querystring: containerName
 */
blobsRoute.get('/', (req, res) => {
  const containerName = req.query["containerName"];

  res.send(`${containerName}`);
});