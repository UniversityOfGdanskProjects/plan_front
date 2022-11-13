import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { en_translation } from "./assets/translations/en";
import { pl_translation } from "./assets/translations/pl";
import { Outlet } from "react-router-dom";

function App() {
  const [langFile, setLangFile] = useState(pl_translation);

  const toggleLang = () => {
    if (langFile === pl_translation) {
      setLangFile(en_translation);
      localStorage.setItem("lang", "en");
    } else {
      setLangFile(pl_translation);
      localStorage.setItem("lang", "pl");
    }
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const lang = localStorage.getItem("lang");
    if (lang === "en") {
      setLangFile(en_translation);
      // document.title = "Schedule"
    } else {
      setLangFile(pl_translation);
      // document.title = "Plan zajęć"
    }
  }, []);
  return (
    <div className="text-textLight dark:text-textDark bg-primaryLight dark:bg-primaryDark">
      <Navbar toggleLang={toggleLang} langFile={langFile} />
      <Outlet />
    </div>
  );
}

export default App;
