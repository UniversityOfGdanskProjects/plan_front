import React, { useRef } from 'react'
import { faBars, faCircleUser, faWheelchair, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
    const menu = useRef()

    const toggleMenu = () => {
        menu.current.classList.toggle('translate-x-[-100%]')
    }

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
        console.log(document.documentElement.classList)
    }

    return (
    <>
    <div ref={menu} className='fixed w-screen h-screen flex  top-0 left-0 p-0 m-0 translate-x-[-100%] transition-all'>
        <div className='h-screen w-[60%] bg-secondaryLight dark:bg-secondaryDark'>
            <h1 className='text-primaryLight px-5 font-bold py-3'>Logo</h1>
            <nav className='text-textDark mt-5'>
               <ul className='text-center'>
                    {NavBarElement("Plan Zajęć", true)}
                    {NavBarElement("Aktualności", false)}
                </ul>
            </nav>
            <section id="accessibility" className='text-textDark fixed bottom-0 mb-2 flex items-center justify-evenly w-[60%]'>
                {AccessibilityBtn("Dostępność", faWheelchair)}
                {AccessibilityBtn("Ciemny motyw", faMoon,"",toggleDarkMode)}
                {AccessibilityBtn("Język", null, "EN")}
            </section>
        </div>
        <div onClick={toggleMenu} className='w-[40%] bg-secondaryLight bg-opacity-40 dark:bg-opacity-40 dark:bg-secondaryDark backdrop-blur-[1px]'>

        </div>
    </div>
    <header className='shadow flex bg-secondaryLight dark:bg-secondaryDark items-center p-4 justify-between'>
        <nav>
            <button onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className='text-xl text-primaryLight' />
                </button>
        </nav>
        <div>
            <FontAwesomeIcon icon={faCircleUser} className='text-xl text-primaryLight' />
        </div>
    </header>
    </>
  )

    function AccessibilityBtn(tooltip_text, icon=null, text=null, click) {
        return <>
            <button onClick={click} className='group'>
                {icon ? <FontAwesomeIcon icon={icon} /> : text}
            <div className='absolute top-[-2rem] text-sm bg-primaryLight text-secondaryLight dark:text-secondaryDark rounded-md hidden group-active:block group-hover:block  p-1'>
                {tooltip_text}
            </div>
            </button>
        </>
    }

    function NavBarElement(text, current) {
        return <>
        <li className={`flex items-center justify-center p-3 ${current ? "bg-primaryLight text-secondaryLight dark:text-secondaryDark" : "cursor-pointer"} font-bold text-xl mx-6 rounded-md mt-5`}>{text}</li>
        {current ? "" : <hr className='mx-6' />}
        </>
    }
}

export default Navbar