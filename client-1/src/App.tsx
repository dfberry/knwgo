import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState();

  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const response = await fetch(
      `http://localhost:8080/api/blobs?container=test&pagesize=10`
    );
    // convert the data to json
    const json = await response.json();

    console.log(`${json}`);

    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{JSON.stringify(data, null, 2)};</div>;
}

export default App;
