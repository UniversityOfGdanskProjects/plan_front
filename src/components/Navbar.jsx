import React, { useRef } from 'react'
import { faBars, faCircleUser, faWheelchair, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TooltipBtn from './TooltipBtn'
import { pl_translation } from '../assets/translations/pl'


const Navbar = ({toggleLang, langFile}) => {
    const menu = useRef()

    const toggleMenu = () => {
        menu.current.classList.toggle('translate-x-[-100%]')
    }


    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'))
    }

    return (
    <>
    <div ref={menu} className='lg:hidden fixed w-screen h-screen flex  top-0 left-0 p-0 m-0 translate-x-[-100%] transition-all'>
        <div className='h-screen w-[60%] bg-secondaryLight dark:bg-secondaryDark'>
            <h1 className='text-primaryLight px-5 font-bold py-3'>Logo</h1>
            <nav className='text-textDark mt-5'>
               <ul className='text-center'>
                    {NavBarElement(langFile.schedule, true)}
                    {NavBarElement(langFile.news, false)}
                </ul>
            </nav>
            <section id="accessibility" className='text-textDark fixed bottom-0 mb-2 flex items-center justify-evenly w-[60%]'>
                <TooltipBtn tooltip_text={langFile.accessibility} icon={faWheelchair} />
                <TooltipBtn tooltip_text={langFile.dark_mode} icon={faMoon} click={toggleDarkMode} />
                <TooltipBtn tooltip_text={langFile.lang_change} text={langFile===pl_translation ? 'EN' : "PL"} click={toggleLang} tooltip_pos="top-[-3.2rem]"/>
            </section>
        </div>
        <div onClick={toggleMenu} className='w-[40%] bg-secondaryLight bg-opacity-40 dark:bg-opacity-40 dark:bg-secondaryDark backdrop-blur-[1px]'>

        </div>
    </div>
    <header className='text-textDark shadow flex bg-secondaryLight dark:bg-secondaryDark items-center p-2 pl-3 justify-between'>
            <button onClick={toggleMenu} className="md:hidden">
                <FontAwesomeIcon icon={faBars} className='text-4xl text-primaryLight' />
                </button>
        <nav className='hidden md:block p-0 m-0'>
            <ul className='flex m-0 p-0 items-center'>
                <h1 className='font-bold mx-6'>Logo</h1>
                {NavBarElement(langFile.schedule, true, 'text-sm')}
                {NavBarElement(langFile.news, false, 'text-sm')}
            </ul>
        </nav>
        <div className='flex gap-5'>
            <section className='items-center gap-5 hidden md:flex justify-center'>
            <TooltipBtn className="flex justify-center items-center w-10 h-10" tooltip_text={langFile.accessibility} icon={faWheelchair} tooltip_pos="top-16" />
            <TooltipBtn tooltip_text={langFile.dark_mode} icon={faMoon} click={toggleDarkMode} tooltip_pos="top-16" />
            <TooltipBtn tooltip_text={langFile.lang_change} text={langFile===pl_translation ? 'EN' : "PL"} click={toggleLang} tooltip_pos='top-16' />
            </section>
            <FontAwesomeIcon icon={faCircleUser} className='text-4xl text-primaryLight' />
        </div>
    </header>
    </>
  )



    function NavBarElement(text, current, text_size="text-lg") {
        return <>
        <li className={`flex items-center justify-center p-3 ${current ? "bg-primaryLight text-secondaryLight dark:text-secondaryDark" : "cursor-pointer"} font-bold ${text_size} mx-6 rounded-md `}>{text}</li>
        {current ? "" : <hr className='mx-6' />}
        </>
    }
}

export default Navbar