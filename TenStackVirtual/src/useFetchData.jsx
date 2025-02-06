import { useEffect, useState } from 'react';

const FetchData = () => {
  const [Data, setData] = useState();
  const url = 'https://mocki.io/v1/f7701139-109b-4da8-9a23-5383bc078eaa';
  const GetData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((x) => setData(x));
  };

  useEffect(() => {
    GetData();
  }, []);
  return { Data };
};
export default FetchData;
