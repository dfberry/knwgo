const JSONDisplayer = ({ data }: any) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

export default JSONDisplayer;
