import { 
  BlobPageResponse,
  BlobResponse,
  BlobStorage,
  ContainerResponse,
  HierarchicalListingResponse,
  PageSettings,
  StorageResponse,
  BlobStorageModels
 } from '@azberry/az-simple';

export type {
  BlobPageResponse,
  BlobResponse,
  ContainerResponse,
  HierarchicalListingResponse,
  PageSettings,
  StorageResponse,
  BlobStorageModels
} from '@azberry/az-simple';

import { BlobSecrets } from './config';

export async function getBlobListFromContainer(
  blobSecrets: BlobSecrets,
  containerName: string,
  prefixStr = '',
  delimiter = '/',
  pageSettings: BlobStorageModels.PageSettings = { maxPageSize: 10, continuationToken: '' }
): Promise<BlobStorageModels.HierarchicalListingResponse> {
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
