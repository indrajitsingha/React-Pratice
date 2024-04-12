import "./main.css"
import { assets } from "../../assets/assets"
import { useContext } from "react"
import { ContextApp } from "../../context/Contextfile"

const Main = () => {
    const { ite } = useContext(ContextApp)

    console.log(ite);
    return (
        <div className="main">
            <div className="nav">
                <p>Gemaini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                <div className="greet">
                    <p><span>Hello Dev.</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        <img src={assets.menu_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="searchbox">
                        <input type="text" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <div className="bottom-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, velit?
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main