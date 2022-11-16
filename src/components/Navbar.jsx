import React, { useContext, useRef } from "react";
import {
  faBars,
  faCircleUser,
  faWheelchair,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TooltipBtn from "./TooltipBtn";
import { LanguageContext } from "../App";

const Navbar = ({ toggleLang }) => {
  const menu = useRef();

  const t = useContext(LanguageContext);

  const toggleMenu = () => {
    menu.current.classList.toggle("translate-x-[-100%]");
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      document.documentElement.classList.contains("dark")
    );
  };

  return (
    <>
      <div
        ref={menu}
        className="z-30 md:hidden fixed w-screen h-screen flex  top-0 left-0 p-0 m-0 translate-x-[-100%] transition-all duration-300 ease-in-out"
      >
        <div
          role={"menu"}
          className="h-screen w-[60%] bg-secondaryLight dark:bg-secondaryDark"
        >
          <h1 className="text-primaryLight px-5 font-bold py-3">Logo</h1>
          <div role={"navigation"} className="text-textDark mt-5">
            <ul className="text-center">
              <li>{NavBarElement(t("schedule"), true)}</li>
              <li>{NavBarElement(t("news"), false)}</li>
            </ul>
          </div>
          <ul className="text-textDark fixed bottom-0 mb-2 flex items-center justify-evenly w-[60%]">
            <li>
              <TooltipBtn
                tooltip_text={t("accessibility")}
                icon={faWheelchair}
                tooltip_pos="top-[-1.4rem]"
              />
            </li>
            <li>
              <TooltipBtn
                tooltip_text={t("dark_mode")}
                icon={faMoon}
                click={toggleDarkMode}
              />
            </li>
            <li>
              <TooltipBtn
                tooltip_text={t("lang_change")}
                text={localStorage.getItem("lang") != "en" ? "EN" : "PL"}
                click={toggleLang}
              />
            </li>
          </ul>
        </div>
        <button
          type="button"
          aria-label="Close Menu"
          onClick={toggleMenu}
          className="w-[40%] bg-secondaryLight bg-opacity-40 dark:bg-opacity-40 dark:bg-secondaryDark backdrop-blur-[1px]"
        ></button>
      </div>
      <nav className="text-textDark shadow flex bg-secondaryLight dark:bg-secondaryDark items-center p-2 pl-3 justify-between">
        <button
          type="button"
          title="Menu"
          onClick={toggleMenu}
          className="md:hidden"
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-4xl text-primaryLight"
          />
        </button>
        <div role={"navigation"} className="hidden md:block p-0 m-0">
          <ul className="flex m-0 p-0 items-center">
            <li>
              <h1 className="font-bold mx-6">Logo</h1>
            </li>
            <li>{NavBarElement(t("schedule"), true, "text-sm")}</li>
            <li>{NavBarElement(t("news"), false, "text-sm")}</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <ul className="items-center gap-5 hidden md:flex justify-center">
            <li>
              <TooltipBtn
                tooltip_text={t("accessibility")}
                icon={faWheelchair}
                tooltip_pos="top-16"
              />
            </li>
            <li>
              <TooltipBtn
                tooltip_text={t("dark_mode")}
                icon={faMoon}
                click={toggleDarkMode}
                tooltip_pos="top-16"
              />
            </li>
            <li>
              <TooltipBtn
                tooltip_text={t("lang_change")}
                text={localStorage.getItem("lang") != "en" ? "EN" : "PL"}
                click={toggleLang}
                tooltip_pos="top-16"
              />
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-4xl text-primaryLight"
          />
        </div>
      </nav>
    </>
  );

  function NavBarElement(text, current, text_size = "text-lg") {
    return (
      <>
        <div
          role="navigation"
          tabIndex={0}
          title={text}
          aria-label={current ? "Current Page" : ""}
          className={`flex items-center justify-center p-3 border-primaryLight my-3 md:my-0 ${
            current
              ? "bg-primaryLight text-secondaryLight dark:text-secondaryDark"
              : "cursor-pointer md:hover:bg-primaryLight md:hover:text-secondaryLight md:dark:hover:text-secondaryDark  transition-all"
          } font-bold ${text_size} mx-6 rounded-md `}
        >
          <h2>{text}</h2>
        </div>
        <hr className="mx-12 h-[2px] rounded bg-primaryLight md:hidden opacity-80" />
      </>
    );
  }
};

export default Navbar;
