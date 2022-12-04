import React, { useContext } from "react";
import { LanguageContext } from "../App";
import MvBtn from "./MvBtn";

const WelcomePage = () => {
  const t = useContext(LanguageContext);

  const handleLogin = () => {
    console.log("login");
  };
  const handleRegister = () => {
    console.log("register");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-8xl "> {t("ug")} </h1>
        <h2 className="text-6xl"> {t("schedule")}</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-1/5 gap-2">
        <div className="flex flex-row items-center justify-center gap-14 text-textLight">
          {/* <button className="text-xl">{t("login")}</button>
          <button className="text-xl">{t("register")}</button> */}
          <MvBtn text={t("login")} click={handleLogin}></MvBtn>
          <MvBtn text={t("register")} click={handleRegister}></MvBtn>
        </div>

        <button> {t("not_registered")} </button>
      </div>
    </div>
  );
};

export default WelcomePage;
