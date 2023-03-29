import { useState } from "react";
import "./App.css";
import { Header } from "./components";
import RouterCountry from "./routes/RouterCountry";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="bg-gray-300 min-h-screen w-full dark:bg-black dark:text-white">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <RouterCountry />
      </main>
    </div>
  );
};

export default App;
