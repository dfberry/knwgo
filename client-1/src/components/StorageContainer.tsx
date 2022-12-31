import { useState, useEffect } from 'react';
import {
  constructBlobUrls,
  constructSubDirUrls
} from '../utils/storage-blob-urls';
import { BlobStorageModels } from '@azberry/shared-1';
import JSONDisplayer from './JSONDisplay';

type StorageContainerProps = {
  iteration: number;
};

function StorageContainer<StorageContainerProps>(prop: StorageContainerProps) {
  const [data, setData] =
    useState<BlobStorageModels.HierarchicalListingResponse>();
  const [subDirList, setSubDirList] = useState<string[]>();
  const [blobUrlList, setBlobUrlList] = useState<string[]>();
  const test = new URLSearchParams(window.location.search).get('test');

  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const response = await fetch(
      `http://localhost:8080/api/blobs?container=test&pagesize=10`
    );
    // convert the data to json
    const json = await response.json();

    setData(json as BlobStorageModels.HierarchicalListingResponse);

    const blobUrls: string[] = constructBlobUrls(json);
    setBlobUrlList(blobUrls);

    const subDirs: string[] = constructSubDirUrls(json);
    setSubDirList(subDirs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {test && <JSONDisplayer data={data} />}

      {subDirList &&
        subDirList.length > 0 &&
        subDirList.map((url, index) => <p key={index}>{url}</p>)}

      {blobUrlList &&
        blobUrlList.length > 0 &&
        blobUrlList.map((url, index) => <p key={index}>{url}</p>)}
    </div>
  );
}

export default StorageContainer;
