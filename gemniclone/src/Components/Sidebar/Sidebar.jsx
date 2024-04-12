import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { useState } from "react"

const Sidebar = () => {
    const [ToogleMenu, setToogleMenu] = useState(false)
    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setToogleMenu((val) => !val)} className="menu" src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {ToogleMenu && <p>new charts</p>}
                </div>
                {ToogleMenu && <div className="recent">
                    <p className="recent-title">
                        recent
                    </p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>what is react ... </p>
                    </div>
                </div>}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {ToogleMenu && <p>help</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {ToogleMenu && <p>activity</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {ToogleMenu && <p>setting</p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar