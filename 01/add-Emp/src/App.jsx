import { useState, useEffect } from "react"
import "./App.css"
import Add from "./components/Add"
const App = () => {
  const [AddEmp, setAddEmp] = useState(false)

  const [Data, setData] = useState([])

  const ProfileData = async () => {
    await fetch("https://6515a076dc3282a6a3ceb80b.mockapi.io/TODOAPP")
      .then((res) => res.json())
      .then((data) => setData(data))
  }
  useEffect(() => {
    ProfileData()
  }, [])
  console.log(Data);
  return (
    <div className="bg-black min-h-[100vh] w-[100%] flex gap-[2rem] justify-center items-start text-white  p-5">
      <div className=" h-[100%] w-[30%] flex gap-[2rem] justify-start items-center flex-col  p-2 " >
        <div className="flex flex-wrap  ">
          {
            Data?.map((res) => {
              return (
                <div className="p-2 w-[100%]" key={res?.id}>
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
          <img className=" h-[200px] w-[200px]  rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className="title w-[100%] flex justify-center items-center">
          <h2 className=" text-2xl font-bold font-serif "> Lorem ipsum dolor sit amet.</h2>
        </div>
        <div className="title w-[100%] flex justify-center items-center">
          <h2 className=" text-xl font-bold font-serif "> Lorem ipsum dolor sit amet.</h2>
        </div>
        <div className="descri w-[100%] flex justify-center items-center">
          <p className=" text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis explicabo culpa doloremque quod temporibus modi quam veritatis sed aperiam sapiente corporis magnam, id vero corrupti quo quisquam quidem enim. Suscipit cupiditate ratione nisi eius pariatur hic, eaque mollitia dignissimos velit ad aperiam voluptates explicabo sequi sunt totam, nemo ipsam, autem amet repellat doloremque facere! Quasi aperiam, explicabo, alias quas animi et corrupti, vero distinctio quisquam laboriosam ut voluptas reprehenderit doloribus cumque delectus deserunt voluptate cupiditate illum rerum tempore maxime aspernatur at ipsam. Adipisci impedit iusto magni non enim dolorem! Quo, quisquam atque quas est hic temporibus incidunt dolore corrupti officia?</p>
        </div>
      </div>
    </div>
  )
}

export default App