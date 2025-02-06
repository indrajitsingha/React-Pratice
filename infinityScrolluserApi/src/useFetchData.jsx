import { useEffect, useState } from 'react';

const FetchData = (url) => {
  const [Data, setData] = useState([]);
  const [Url, setUrl] = useState(url);
  const GetData = () => {
    try {
      fetch(Url)
        .then((res) => res.json())
        .then((x) => setData(x));
    } catch (err) {
      console.log(err);
    }

  };

  const getNext = () => {
    setUrl(Data?.next)
  }
  useEffect(() => {
    GetData();
  }, [Url]);

  const [data, setdata] = useState([])
  useEffect(() => {
    if (Data?.results?.length > 0) {
      console.log(data.find(res => res === Data?.results));
    
        setdata((old) => [...old, ...Data?.results])
    }
  }, [Data?.results])


  return { data, getNext };
};
export default FetchData;
