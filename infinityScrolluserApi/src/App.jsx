import "./App.css"
import WithoutReactQuery from "./WithoutReactQuery"
import WithReactQuery from "./WithReactQuery"
const App = () => {
  return (
    <div className="main">
        <h1>Infinite Scrolling with useInfiniteQuery - Tanstack Query</h1>
      {/* <WithoutReactQuery /> */}
      <WithReactQuery />
    </div>
  )
}

export default App
