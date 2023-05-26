import "./App.css";
import Header from "./components/Header/Header";
import ChatBody from "./components/chatBody/ChatBody";
import UserInput from "./components/userInput/UserInput";

function App() {
  return (
    <>
      <div
        className="bg-[#1A232E] h-screen py-6 relative sm:px-28 px-10 text-white 
    overflow-hidden flex flex-col justify-between align-middle"
      >
        {/* gradient */}
        <div className="gradient-01 z-0 absolute"></div>
        <div className="gradient-02 z-0 absolute"></div>

        {/* header */}
        <Header />

        {/* chat body */}
        <div
          className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8
         self-center px-4"
        >
          <ChatBody />
        </div>

        {/* user input */}
        <div className="full max-w-4xl min-w-[20rem] self-center"></div>
        <UserInput />
      </div>
    </>
  );
}

export default App;
