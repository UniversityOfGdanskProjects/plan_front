import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useId } from "react";

const TooltipBtn = ({
    tooltip_text,
    icon = null,
    text = null,
    click,
    size = "text-sm",
    tooltip_pos = "top-[-2.4rem]",
}) => {
    const tooltipId = useId();

    return (
        <div className="tooltip-btn">
            <button
                type="button"
                title={tooltip_text}
                onClick={click}
                className="group p-0"
            >
                {icon ? <FontAwesomeIcon icon={icon} /> : text}
                <span
                    className={`${tooltip_pos} text-xs absolute  bg-primaryLight text-secondaryLight dark:text-secondaryDark md:bg-secondaryLight dark:md:bg-secondaryDark md:text-textDark dark:md:text-textDark rounded-md hidden group-hover:block px-2 w-[85px]`}
                >
                    {tooltip_text}
                </span>
            </button>
        </div>
    );
};

export default TooltipBtn;
