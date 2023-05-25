import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div
      className="bg-[#1A232E] h-screen py-6 relative sm:px-28 text-white 
    overflow-hidden flex flex-col justify-between align-middle"
    >
      {/* gradient */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>
      {/* header */}
      <Header />
    </div>
  );
}

export default App;
