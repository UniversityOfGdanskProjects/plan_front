import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import useTranslation from "./hooks/useTranslation";

export const LanguageContext = React.createContext();

function App() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  const toggleLang = () => {
    if (language === "en") {
      setLanguage("pl");
    } else if (language === "pl") {
      setLanguage("en");
    }
  };

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <LanguageContext.Provider value={t}>
      <div className="text-textLight dark:text-textDark bg-primaryLight dark:bg-primaryDark">
        <Navbar toggleLang={toggleLang} />
        <Outlet />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
