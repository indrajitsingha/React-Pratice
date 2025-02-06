const Interest = ({ Data, setFn, errors }) => {

    const handleChnage = (e) => {
        const { name, checked } = e.target;
        setFn((prev) => {
            const updatedInterests = checked ? [...prev?.interest || [], name] : prev?.interest || [].filter((interest) => interest !== name)
            return {
                ...prev, interest: updatedInterests
            }

        })
    }

    return (
        <div className=" Profileform">
            <div className="grp">
                <label >coding</label>
                <input type="checkbox" name="Coding" checked={Data?.interest?.includes("Coding")} onChange={handleChnage} />
                <label >Cricket</label>
                <input type="checkbox" name="Cricket" checked={Data?.interest?.includes("Cricket")} onChange={handleChnage} />
                <label >Football</label>
                <input type="checkbox" name="Football" checked={Data?.interest?.includes("Football")} onChange={handleChnage} />

            </div>
            {errors.interest && <span className="err">{errors.interest}</span>}

        </div>
    )
}

export default Interest