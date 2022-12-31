// import { useState, useEffect } from 'react';
// import JSONDisplayer from './components/JSONDisplay';
import StorageContainer from './components/StorageContainer';
// import { HierarchicalListingResponse } from '../../shared-1/dist/index';

function App() {
  //   const [data, setData] = useState<HierarchicalListingResponse>();

  // // declare the async data fetching function
  // const fetchData = async () => {
  //   // get the data from the api
  //   const response = await fetch(
  //     `http://localhost:8080/api/blobs?container=test&pagesize=10`
  //   );
  //   // convert the data to json
  //   const json = await response.json();

  //   setData(json as HierarchicalListingResponse);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <StorageContainer />
    </div>
  );
}

export default App;
