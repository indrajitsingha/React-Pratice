import { createContext, useState } from 'react';
import runChat from '../config/gemini';

// Create a context
const ContextApp = createContext();

// Define your context provider component
const Contextfile = ({ children }) => {
    const TypingEffect = (index, nextWord) => {
        setTimeout(() => {
            setresultData(prev => prev + nextWord)
        }, 75 * index)

    }

    const [Input, setInput] = useState("")
    const [recentPrompt, setrecentPrompt] = useState([])
    const [ShowResult, setShowResult] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [resultData, setresultData] = useState("")
    const [PrevPrompt, setPrevPrompt] = useState([])

    const onSent = async () => {
        setresultData("")
        setLoading(true)
        setShowResult(true)
        setrecentPrompt(Input)
        setPrevPrompt([...PrevPrompt,Input.slice(0,20)])
        console.log(PrevPrompt);
        const response = await runChat(Input)
        let doubleStar = response.split("**")
        let doubleStarResponse;
        for (let index = 0; index <  doubleStar.length; index++) {
            if (index === 0 || index % 2 !== 1) {
                doubleStarResponse += doubleStar[index];
            } else {
                doubleStarResponse += "<b>" + doubleStar[index] + "</b>"
            }

        }
        let singleStar = doubleStarResponse.split("*").join("</br>")

        let typingEffect = singleStar.split(" ")
        
        for (let index = 0; index < typingEffect.length; index++) {
            const Nextword = typingEffect[index]
            TypingEffect(index, Nextword + " ")
        }

        // setresultData(singleStar)
        setLoading(false)
        setInput("")

    }

    return (
        <ContextApp.Provider value={{
            Input, setInput,
            recentPrompt, setrecentPrompt,
            ShowResult, setShowResult,
            Loading, setLoading,
            resultData, setresultData,
            onSent,
            PrevPrompt, setPrevPrompt


        }}>
            {children}
        </ContextApp.Provider>
    );
};

export { ContextApp }; // Exporting the context itself
export default Contextfile; // Exporting the context provider component
