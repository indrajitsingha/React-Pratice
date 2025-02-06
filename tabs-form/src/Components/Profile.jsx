const Profile = ({Data,setFn,errors}) => {
    const handleChnage=(e)=>{
        setFn((prev)=>{
            return{
                ...prev,
                [e.target.name]:e.target.value
            }
        })

    }

    return (
        <div className=" Profileform">
            <div className="grp">
                <label >Name</label>
                <input type="text" name="name" value={Data.name} onChange={handleChnage} />
              
            </div>
            {errors.name && <span className="err">{errors.name}</span> }
            <div className="grp">
                <label >Email</label>
                <input type="text" name="email" value={Data.email} onChange={handleChnage}/>
               

            </div>
            {errors.email && <span className="err">{errors.email}</span> }
            <div className="grp">
                <label >Age</label>
                <input type="number" name="age" value={Data.age} onChange={handleChnage} />
               
            </div>
            {errors.age && <span className="err">{errors.age}</span> }

        </div>
    )
}

export default Profile