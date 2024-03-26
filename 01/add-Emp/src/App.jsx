import { useState, useEffect } from "react"
import "./App.css"
import Add from "./components/Add"
const App = () => {
  const [AddEmp, setAddEmp] = useState(false)

  const [Data, setData] = useState([])
  const [ProDetails, setProDetails] = useState({})

  const ProfileData = async () => {
    await fetch("https://6515a076dc3282a6a3ceb80b.mockapi.io/TODOAPP")
      .then((res) => res.json())
      .then((data) => setData(data))
  }
  const Profiledeatils = async (id) => {
    await fetch(`https://6515a076dc3282a6a3ceb80b.mockapi.io/TODOAPP/${id}`)
      .then((res) => res.json())
      .then((data) => setProDetails(data))
  }
  useEffect(() => {
    ProfileData()
  }, [])
  console.log(ProDetails);
  return (
    <div className="bg-black min-h-[100vh] w-[100%] flex gap-[2rem] justify-center items-start text-white  p-5">
      <div className=" h-[100%] w-[30%] flex gap-[2rem] justify-start items-center flex-col  p-2 " >
        <div className="flex flex-wrap  ">
          {
            Data?.map((res) => {
              return (
                <div className="p-2 w-[100%]" key={res?.id} onClick={() => Profiledeatils(res?.id)}>
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src={res?.avatar} />
                    <div className="flex-grow">
                      <h2 className=" title-font font-medium">{res?.name}</h2>
                      <p >{res?.Designation}</p>
                    </div>
                    <div className="flex-grow ml-[50px]">
                      <button className=" bg-red-800 text-white rounded px-5 py-2"> Delete</button>
                    </div>
                  </div>
                </div>
              )
            })
          }



        </div>

      </div>
      <div className=" h-[100%] w-[60%]  flex gap-[2rem] justify-start items-center  flex-col  p-2  ">

        <div className="btn w-[100%] flex justify-end items-center   ">
          {
            AddEmp ? <Add /> : ""
          }
        </div>
        <div className="btn w-[100%] flex justify-end items-center ">   <button className="shadow__btn" onClick={() => setAddEmp((val) => !val)}> Add Employee</button></div>
        <div className="image  w-[100%] flex justify-center items-center mt-10">
          <img className=" h-[200px] w-[200px]  rounded-full object-cover" src={ProDetails?.avatar} alt="" />
        </div>
        <div className="title w-[100%] flex justify-center items-center">
          <h2 className=" text-2xl font-bold font-serif "> {ProDetails?.name}</h2>
        </div>
        <div className="title w-[100%] flex justify-center items-center">
          <h2 className=" text-xl font-bold font-serif "> {ProDetails?.Designation}</h2>
        </div>
        <div className="descri w-[100%] flex justify-center items-center">
          <p className=" text-center"> {ProDetails?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default App