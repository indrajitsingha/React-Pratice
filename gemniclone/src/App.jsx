import Main from "./Components/Main/Main"
import Sidebar from "./Components/Sidebar/Sidebar"
import Contextfile from "./context/Contextfile"


const App = () => {
  return (
    <>
      <Contextfile>
        <Sidebar />
        <Main />
      </Contextfile>
    </>
  )
}

export default App