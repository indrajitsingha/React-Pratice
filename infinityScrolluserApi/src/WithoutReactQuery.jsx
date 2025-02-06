import { useEffect } from "react";
import useFetchData from "./useFetchData"
const WithoutReactQuery = () => {
    const { data: Data, getNext } = useFetchData('https://swapi.dev/api/people');
    console.log(Data);
    useEffect(()=>{
        console.log(window.innerHeight)
    },[Data])
    
    return (
        <>
            <div className="card">
                {Data?.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
            {/* next */}
            <button onClick={getNext}>LoadMore</button>
        </>
    )
}

export default WithoutReactQuery

export const UserCard = ({ user }) => {
    return (
        <div className="usercard">
            <h2 >{user?.name}</h2>
            <p className="">Height : {user?.height}</p>
            {/* <p className="">mass : {user?.mass}</p>
            <p className="">eye_color : {user?.eye_color}</p>
            <p className="">gender : {user?.gender}</p> */}
        </div>
    )
}