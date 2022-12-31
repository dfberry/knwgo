export type Environment = 'production' | 'development';

export type Config = {
  environment: Environment;
  port?: number;
  blob: BlobSecrets;
};

export type BlobSecrets = {
  accountName: string;
  accountKey: string;
};

export function getConfig(): Config {
    const environment = process.env.NODE_ENV as Environment;
    const port = Number(process.env.PORT);
    const blobStorageAccountName = process.env
      .AZURE_BLOB_STORAGE_ACCOUNT_NAME as string;
    const blobStorageAccount = process.env
      .AZURE_BLOB_STORAGE_ACCOUNT_KEY as string;
  
    const configValues = {
      environment,
      port,
      blob: {
        accountName: blobStorageAccountName,
        accountKey: blobStorageAccount
      }
    };
    // eslint-disable-next-line no-console
    console.log(configValues);
    return configValues;
  }
  
