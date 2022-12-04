import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useId } from "react";

const MvBtn = ({ tooltip_text, text, click }) => {
  return (
    <div className="mv-btn group">
      <button
        type="button"
        title={tooltip_text}
        onClick={click}
        className="p-0 font-bold"
      >
        {text}
      </button>
    </div>
  );
};

export default MvBtn;
