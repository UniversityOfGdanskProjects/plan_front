import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useId } from "react";

const MvBtn = ({ tooltip_text = null, text, click }) => {
  return (
    <div className="tooltip-btn group">
      <button
        type="button"
        title={tooltip_text}
        onClick={click}
        className="p-0 font-bold"
      >
        {text}
      </button>
      <span
        className={`text-xs absolute text-center translate-x-[-1.5rem] bg-primaryLight text-secondaryLight dark:text-secondaryDark md:bg-secondaryLight dark:md:bg-secondaryDark md:text-textDark dark:md:text-textDark rounded-md scale-0 group-focus:scale-100 group-hover:scale-100 px-2 w-[85px] transition-all`}
      >
        {tooltip_text}
      </span>
    </div>
  );
};

export default MvBtn;
