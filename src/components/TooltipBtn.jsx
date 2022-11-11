import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



const TooltipBtn = ({tooltip_text, icon=null, text=null, click, size="text-sm", tooltip_pos='top-[-2rem]'}) => {
    return (<span className='tooltip-btn'>
            <button onClick={click} className='group p-0'>
                {icon ? <FontAwesomeIcon icon={icon} /> : text}
            <span className={`${tooltip_pos} text-sm absolute  bg-primaryLight text-secondaryLight dark:text-secondaryDark md:bg-secondaryLight dark:md:bg-secondaryDark md:text-textDark dark:md:text-textDark rounded-md hidden group-active:block group-hover:block p-1`}>
                {tooltip_text}
            </span>
            </button>
        </span>)
    }

export default TooltipBtn