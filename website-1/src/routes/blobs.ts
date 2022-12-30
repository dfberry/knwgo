import e, { Router } from 'express';
import { Config } from '../shared/config';
import { getBlobListFromContainer } from '../shared/blobStrorage';
import { PageSettings } from '@azberry/az-simple';

export const blobsRoute = Router();

/**
 * List all blobs.
 *
 * Querystring:
 * containerName
 * prefix - defaults to empty string if not present
 * delimiter - defaults to '/; if not present
 */
blobsRoute.get('/', async (req, res) => {
  const containerName = (req.query['container'] as string) || '';
  const prefix = (req.query['prefix'] as string) || '';
  const delimiter = (req.query['delimiter'] as string) || '/';
  const pageSize = req.query['pagesize'] ? Number(req.query['pagesize']) : 10;
  const pageContinuationToken = (req.query['pagetoken'] as string) || '';

  console.log(`pageSize=${pageSize}`);
  console.log(`pageContinuationToken=${pageContinuationToken}`);

  if (!containerName) {
    res.json({
      list: [],
      error: '`containerName` in missing from querystring'
    });
  }

  const pageSettings: PageSettings = {
    maxPageSize: pageSize,
    continuationToken: pageContinuationToken
  };

  console.log(pageSettings);

  const appConfig: Config = req.app.get('appConfig');
  const list = await getBlobListFromContainer(
    appConfig.blob,
    containerName,
    prefix,
    delimiter,
    pageSettings
  );

  res.json(list);
});
