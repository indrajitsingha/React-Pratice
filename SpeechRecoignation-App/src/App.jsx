
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition-es';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import "./App.css"
import { useState } from 'react';
const App = () => {
  const [Micon, setMicon] = useState(false)
  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className=" bg-black h-[100vh] flex justify-center items-center flex-col w-[100%]">
      <h1 style={{letterSpacing:"3px"}} className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">React Voice Recognition App</h1>

      <div className="container  bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
      w-[50%] flex justify-center items-center flex-col ">
        <div className="main min-h-[30vh] font-serif p-3 text-white tracking-wide">
          {transcript}
        </div>
        <div className="flex justify-center items-center gap-5 mb-3">
          <CopyToClipboard text={transcript}
          // onCopy={() => this.setState({ copied: true })}
          >
            {/* <span>Copy to clipboard with span</span> */}
            <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
              Copy to Clipboard
            </button>
          </CopyToClipboard>
          {
            Micon ?
              <button onClick={() => {
                SpeechRecognition.stopListening
                setMicon(false)
              }} className="py-2 px-5  flex justify-center items-center bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-75">
                Stop Listening
                <img className=" h-5 mx-1" src="https://www.svgrepo.com/show/327436/mic-off.svg" alt="" />

              </button>

              : <button onClick={() => {
                SpeechRecognition.startListening({ language: 'en-IN' })
                setMicon(true)
              }} className="py-2 px-5 flex justify-center items-center bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-75">
                Start Listening
                <img className=" h-5 mx-1" src="https://www.svgrepo.com/show/1902/microphone.svg" alt="" />
              </button>
          }




        </div>

      </div>

    </div>
  )
}

export default App