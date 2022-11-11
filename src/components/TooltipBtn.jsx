import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



const TooltipBtn = ({tooltip_text, icon=null, text=null, click, size="text-sm"}) => {
    return (<>
            <button onClick={click} className='group p-0'>
                {icon ? <FontAwesomeIcon icon={icon} /> : text}
            <span className={`text-sm absolute top-[-3.2rem] bg-primaryLight text-secondaryLight dark:text-secondaryDark rounded-md hidden group-active:block group-hover:block p-1`}>
                {tooltip_text}
            </span>
            </button>
        </>)
    }

export default TooltipBtn