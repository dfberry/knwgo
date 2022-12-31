import { BlobStorageModels } from '@azberry/shared-1';

export function constructBlobUrls(
  data: BlobStorageModels.HierarchicalListingResponse
): string[] {
  const urls: string[] = [];

  if (data?.blobNames && data?.blobNames.length > 0) {
    data.blobNames.map((blobName: string) => {
      urls.push(
        `${data.serviceEndpoint}${data.container}${data.delimiter}${blobName}`
      );
    });
  }

  return urls;
}
export function constructSubDirUrls(
  data: BlobStorageModels.HierarchicalListingResponse
): string[] {
  const urls: string[] = [];

  if (data?.subDirectoryNames && data?.subDirectoryNames.length > 0) {
    data.subDirectoryNames.map((subdirName: string) => {
      urls.push(
        `${data.serviceEndpoint}${data.container}${data.delimiter}${subdirName}`
      );
    });
  }

  return urls;
}
