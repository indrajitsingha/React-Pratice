import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { useState } from "react"
import { useContext } from "react"
import { ContextApp } from "../../context/Contextfile"

const Sidebar = () => {
    const [ToogleMenu, setToogleMenu] = useState(false)

    const {
        PrevPrompt
    } = useContext(ContextApp)

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
                        Recent
                    </p>
                    {
                        PrevPrompt ?
                            PrevPrompt.map((val) => {
                                return (
                                    <div className="recent-entry" key={val}>
                                        <img src={assets.message_icon} alt="" />
                                        <p >{val} ...</p>
                                    </div>
                                )
                            })
                            : null
                    }
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