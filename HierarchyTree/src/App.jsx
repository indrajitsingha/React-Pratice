import  "./App.css";
import Tree from "./components/Tree";
import data from "./data.json"


const App = () => {
  return (
    <div className="tree">
      {
        data?.map((res) => <Tree TreeData={res} key={res.id} />)
      }
    </div>

  )
}

export default App