import React from 'react'
import { faBars, faCircleUser, faWheelchair, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <>
    <dir className='fixed w-screen h-screen flex top-0 left-0 p-0 m-0'>
        <div className='h-screen w-[60%] bg-secondaryLight dark:bg-secondaryDark'>
            <h1 className='text-primaryLight px-5 font-bold py-3'>Logo</h1>
            <nav className='text-textDark mt-5'>
               <ul className='text-center'>
                    {NavBarElement("Plan Zajęć", true)}
                    {NavBarElement("Aktualności", false)}
                </ul>
            </nav>
            <section id="accessibility" className='text-textDark fixed bottom-0 mb-2 flex items-center justify-evenly w-[60%]'>
                <button>
                    <FontAwesomeIcon icon={faWheelchair}/>
                    </button>
                <button>
                <FontAwesomeIcon icon={faMoon} />

                </button>
                <button className='font-bold text-lg text-center'>EN</button>
            </section>
        </div>
        <div className='w-[40%] bg-secondaryLight bg-opacity-40 dark:bg-secondaryDark backdrop-blur-[1px]  '>

        </div>
    </dir>
    <header className='shadow flex bg-secondaryLight dark:bg-secondaryDark items-center p-4 justify-between'>
        <nav>
            <FontAwesomeIcon icon={faBars} className='text-xl text-primaryLight' />
        </nav>
        <div>
            <FontAwesomeIcon icon={faCircleUser} className='text-xl text-primaryLight' />
        </div>
    </header>
    </>
  )

    function NavBarElement(text, current) {
        return <>
        <li className={`flex items-center justify-center p-3 ${current ? "bg-primaryLight text-secondaryLight" : ""} font-bold text-xl mx-6 rounded-md mt-5`}>{text}</li>
        {current ? "" : <hr className='mx-6' />}
        </>
    }
}

export default Navbar