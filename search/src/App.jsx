import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';

function App() {
  const [input, setinput] = useState("")
  const [data, setdata] = useState([])
  const [focus, setfocus] = useState(false)
  const [cache, setcache] = useState({})

  console.log(input);

  const fetchData = async () => {
    if (cache[input]) {
      console.log("Fetching data from cache" + cache[input]);
      setdata(cache[input]);
      return
    }
    const response = await fetch("https://dummyjson.com/recipes/search?q=" + input)
    const res = await response.json()
    setdata(res.recipes);
    console.log("Fetching data from Api" + res);
    setcache((old) => ({ ...old, [input]: res.recipes }))

  }

  useEffect(() => {
    const timerRef = setTimeout(fetchData, 500)
    return () => clearTimeout(timerRef)
  }, [input])
  return (
    <div className="main">
      <div className="serach">
        <h2>Search Recipes</h2>
        <input type="text" onChange={(e) => setinput(e.target.value)} onFocus={() => setfocus(true)} onBlur={() => setfocus(false)} />
        {focus && <div className="itemsdiv">
          {data?.map((value) => <div className="items" key={value.id} onClick={() => setinput(value?.name)}>{value.name}</div>)}
        </div>}
      </div>

    </div>
  )
}

export default App
