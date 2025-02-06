const Settings = ({ Data, setFn, errors }) => {
    const handleChnage = (e) => {
        setFn((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })

    }
    return (
        <div className="Profileform">
            <div className="grp">
                <label >Dark</label>
                <input type="radio" name="theme" value="Dark" checked={Data.theme === "Dark"} id="" onChange={handleChnage} />
                <label >Light</label>
                <input type="radio" name="theme" value="Light" checked={Data.theme === "Light"} id="" onChange={handleChnage} />

            </div>
            {errors.theme && <span className="err">{errors.theme}</span>}
        </div>
    )
}

export default Settings