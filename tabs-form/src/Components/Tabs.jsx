import Profile from "./Profile"
import Interest from "./Interest"
import Settings from "./Settings"
import { useState } from "react"

const Tabs = () => {
    const [Data, setData] = useState({})
    const [ActiveTabIndex, setActiveTabIndex] = useState(0)
    const [errors, seterrors] = useState({})

    const TabsComponenets = [
        {
            title: "Profile",
            component: Profile,
            validate: () => {
                const err = {}
                if (!Data.name || Data.name.length < 2) {
                    err.name = "Name is  Not Valid"
                }
                if (!Data.email || Data.name.email < 2) {
                    err.email = "Email is  Not Valid"
                }
                if (!Data.age || parseInt(Data.age) <18) {
                    err.age = "Age is  Not Valid"
                }
                seterrors(err)
                return err.name || err.email || err.age ? false : true
            }

        }
        ,
        {
            title: "Interest",
            component: Interest,
            validate: () => {
                const err = {}
                if (!Data.interest || Data.interest.length < 0) {
                    err.interest = "Interest is  Not Valid"
                }

                seterrors(err)
                return err.interest ? false : true
            }
        }
        ,
        {
            title: "Settings",
            component: Settings,
            validate: () => {
                const err = {}
                if (!Data.theme ) {
                    err.theme = "theme is  Not Valid"
                }
                seterrors(err)
                return err.theme ? false : true
            }
        }
    ]
    let ActiveTab = TabsComponenets[ActiveTabIndex].component

    const SubmitFn = () => {   if(TabsComponenets[ActiveTabIndex].validate()) console.log(Data) }

    const NextFn = () => {
        // ActiveTab = TabsComponenets[ActiveTabIndex].component
        if(TabsComponenets[ActiveTabIndex].validate())
        setActiveTabIndex((ActiveTabIndex) => ActiveTabIndex + 1)
    }
    const PrevFn = () => {
        // ActiveTab = TabsComponenets[ActiveTabIndex].component
      
        setActiveTabIndex((ActiveTabIndex) => ActiveTabIndex - 1)
    }

    return (
        <div className="mainTabs">
            <div className="tabs">
                {TabsComponenets.map((tab, index) => <button className={ActiveTabIndex === index ? "buttonactive" : ""} key={tab.title} onClick={() => setActiveTabIndex(index)}>{tab.title}</button>)}
            </div>
            <div className="tabsform">
                <ActiveTab Data={Data} setFn={setData} errors={errors} />
            </div>
            <div>

                <div className="grp" style={{ margin: '10px' }}>
                    {ActiveTabIndex === TabsComponenets.length - 1 && <button onClick={SubmitFn}>Submit</button>}
                    {ActiveTabIndex >= 0 && ActiveTabIndex < TabsComponenets.length - 1 && <button onClick={NextFn}>Next</button>}
                    {ActiveTabIndex > 0 && <button onClick={PrevFn}>Prev</button>}
                </div>
            </div>
        </div>
    )
}

export default Tabs