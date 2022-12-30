import {
  BlobStorage,
  HierarchicalListingResponse,
  PageSettings
} from '@azberry/az-simple';
import { BlobSecrets } from './config';

export async function getBlobListFromContainer(
  blobSecrets: BlobSecrets,
  containerName: string,
  prefixStr = '',
  delimiter = '/',
  pageSettings: PageSettings = { maxPageSize: 10, continuationToken: '' }
): Promise<HierarchicalListingResponse> {
  const client = new BlobStorage(
    blobSecrets.accountName,
    blobSecrets.accountKey
  );

  console.log(`getBlobListFromContainer`);
  console.log(pageSettings);

  const results = await client.listBlobsInContainer(
    containerName,
    pageSettings,
    prefixStr,
    delimiter
  );

  return results;
}
