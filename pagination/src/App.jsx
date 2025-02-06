
import { useEffect, useState } from 'react';
import './App.css'
import Products from './components/Products';

function App() {
  const [Data, setData] = useState([])

  const [totalpage, settotalpage] = useState(0)
  const [activePage, setactivePage] = useState(1)
  const [limit, setlimit] = useState(5)
  const fetchData = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((res) => {
        setData(res.products)
      });
  }
  console.log(totalpage);

  useState(() => {
    fetchData()


  }, [])
  useEffect(() => {
    settotalpage(Math.ceil(parseInt(Data?.length) / limit))
  }, [Data,limit])
  return (
    <>
      <div className='main'>
        <div className="pagination">
          {Array.from({ length: totalpage }).map((_, index) => <button onClick={() => setactivePage(index + 1)} className={index + 1 === activePage ? 'active' : ""} key={index}>{index + 1}</button>)}
        </div>
        <div className="pagination">
          <select onChange={(e) => setlimit(parseInt(e.target.value))}>
            <option selected value="5"> 5</option>
            <option value="10"> 10</option>
            <option value="15"> 15</option>
          </select>
        </div>
        <div className="productsdiv">

          {Data?.slice(activePage * limit - limit, activePage * limit)?.map((pro) => <Products pro={pro} key={pro.id} />)}
        </div>

      </div>
    </>
  )
}

export default App
