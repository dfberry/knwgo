import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';
import { ConnectOptions } from 'mongoose';

// Fix types
let databaseConnection: { url: string; options: ConnectOptions & { useNewUrlParser: boolean; useUnifiedTopology: true } };

if (process.env.NODE_ENV === 'development') {
  databaseConnection = {
    url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  };
} else {
  // Cosmos DB manages the port as part of the connection string
  databaseConnection = {
    url: `mongodb://${DB_HOST}/${DB_DATABASE}`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  };
}

export const dbConnection = databaseConnection;
