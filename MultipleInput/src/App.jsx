import { useEffect, useRef, useState } from "react";
import "./App.css";

import Pill from "./Pills";

function App() {
  const [selectedUsers, setselectedUsers] = useState([])
  const [suggestions, setsuggestions] = useState([])
  const [Input, setInput] = useState("")

  // https://dummyjson.com/users/search?q=Jo


  useEffect(() => {
    const FetchData = () => {
      fetch(`https://dummyjson.com/users/search?q=${Input}`)
        .then((response) => response.json())
        .then((response) => setsuggestions(response))
    }
    if (Input.length > 0) {
      setTimeout(() => {
        FetchData()
      }, 1000)

    }
    return () => clearInterval(FetchData)

  }, [Input])
  const Addpills = (data) => {
    setselectedUsers((val) => [...val, data])
  }
  const handleClear = (index) => {
    selectedUsers.splice(index, 1)
    setselectedUsers((val) => [...val])
  }


  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {/* Pills */}
        {selectedUsers.map((user, index) => {
          return (
            <Pill
              index={index}
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              clearFn={handleClear}
            />
          );
        })}
        {/* input feild with search suggestions */}
        <div>
          <input
            placeholder="Search For a User..."
            onChange={(e) => setInput(e.target.value)}
          />
          {/* Search Suggestions */}
          <ul className="suggestions-list">
            {suggestions?.users?.map((user, index) => {
              return (
                <li
                  // className={index === activeSuggestion ? "active" : ""}
                  key={user.email}
                  onClick={() => Addpills(user)}
                >
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;